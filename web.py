from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import tensorflow as tf
import numpy as np
from io import BytesIO
from PIL import Image, UnidentifiedImageError
import uvicorn

# Initialize FastAPI app
app = FastAPI()

# CORS Middleware to allow cross-origin requests from your frontend
origins = [
    "http://localhost",            # Local development
    "http://localhost:5173",       # React local development
    "https://potato-leaf-diseases-detection.netlify.app"  # Your production frontend
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Adjust the list with your frontend URLs
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load the pre-trained TensorFlow model
MODEL = tf.keras.models.load_model("trained_plant_disease_model.keras")

# Class names for the model output
CLASS_NAMES = ["Bacterial Spot", "Healthy", "Potato_Early_Blight", "Potato_Late_Blight", "Healthy","Bacterial_spot" ,"Tomato_Early_Blight",
                "Tomato_Late_Blight", "Leaf_Mold","Septoria_Leaf_Spot", "Spider_Mites_Two_Spotted", "Target_Spot",
                 "YellowLeaf_Curl_Virus","Mosaic_virus" , "Healthy"]


# Read the image and preprocess it
def read_file_as_image(data) -> np.ndarray:
    try:
        # Load the image from the byte data
        image = Image.open(BytesIO(data))
        # Convert to RGB (ensure it's not in a different mode like RGBA)
        image = image.convert("RGB")
        # Resize image to match model input (128x128 in this case)
        image = image.resize((128, 128))  # Adjust based on your model's expected input
        # Convert image to numpy array
        return np.array(image)
    except UnidentifiedImageError:
        raise HTTPException(status_code=400, detail="Invalid image file. Please upload a valid image.")

# Root endpoint to check if the server is running
@app.get("/")
async def hello():
    return {"message": "Hello World"}

# Prediction endpoint
@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    try:
        # Check if the file is a valid image (JPG, PNG, JPEG)
        if not file.filename.lower().endswith(("png", "jpg", "jpeg")):
            raise HTTPException(status_code=400, detail="Invalid file format. Please upload a PNG, JPG, or JPEG image.")

        # Read and preprocess the image
        image = read_file_as_image(await file.read())
        img_batch = np.expand_dims(image, axis=0)  # Expand to batch size of 1

        # Make predictions with the model
        predictions = MODEL.predict(img_batch)

        # Get predicted class and confidence
        predicted_class = CLASS_NAMES[np.argmax(predictions[0])]
        confidence = np.max(predictions[0])

        # Set a confidence threshold for uncertain predictions
        if confidence < 0.6:
            raise HTTPException(status_code=400, detail="Uncertain prediction. Please upload a clear potato leaf image.")

        # Return prediction result
        return {
            "class": predicted_class,
            "confidence": float(confidence)
        }

    except HTTPException as http_err:
        raise http_err  
    except Exception as e:
        
        print(f"Error: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Internal server error: {str(e)}")

# Running the FastAPI server using Uvicorn
if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=8000)

