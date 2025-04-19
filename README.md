#🍃 Leaf Disease Detection - FastAPI Backend
This is the FastAPI-based backend for a plant (Potato & Pepper Bell) leaf disease detection system. It receives an image file from the frontend, processes it, and returns a prediction using a pre-trained TensorFlow model.

🔧 Tech Stack
FastAPI – for creating the REST API

TensorFlow – for loading and making predictions with the trained deep learning model

NumPy – for handling numerical data

PIL (Pillow) – for image processing

Uvicorn – ASGI server for running the FastAPI app

🚀 API Endpoints
1. GET /
Purpose: Health check endpoint to ensure the server is running.

Response:

json
Copy
Edit
{
  "message": "Hello World"
}
2. POST /predict
Purpose: Accepts an image file (PNG, JPG, or JPEG), preprocesses it, and returns the predicted disease class with confidence.

Request:

Method: POST

Content-Type: multipart/form-data

Field name: file (image file)

Response (example):

json
Copy
Edit
{
  "class": "Potato___Early_blight",
  "confidence": 0.9876543
}
Possible Errors:

400 Bad Request: Invalid image format or uncertain prediction

500 Internal Server Error: Unexpected server error

📁 Model & Classes
The model (trained_plant_disease_model.keras) is a TensorFlow Keras model trained to classify:

python
Copy
Edit
CLASS_NAMES = [
  "Bacterial Spot",
  "pepper_Healthy",
  "Early Blight",
  "Late Blight",
  "Healthy"
]
Ensure that the CLASS_NAMES list matches the exact class order used during model training.

🧠 How It Works
The image file is uploaded to /predict.

The image is read and resized to 128x128.

It's converted into a NumPy array and batched.

The model predicts the class and returns the most confident result.

🔄 CORS Configuration
The app allows requests from:

python
Copy
Edit
[
  "http://localhost",                 # For development
  "http://localhost:5173",           # React local server
  "https://potato-leaf-diseases-detection.netlify.app"  # Production frontend
]
▶️ Run the Backend
bash
Copy
Edit
uvicorn main:app --reload
Or if using __main__ in your script:

bash
Copy
Edit
python main.py
