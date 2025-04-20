# 🍃 Leaf Disease Detection System

This project is a complete solution for detecting diseases in plant leaves (Potato & Pepper Bell) using a deep learning model. It consists of a **FastAPI backend** and a **React-based frontend** for seamless interaction. Users can upload an image of a leaf, and the system will predict the disease along with its confidence level.

---

## 🌟 Features

- **Frontend**: User-friendly interface for uploading leaf images and viewing predictions.
- **Backend**: FastAPI-based REST API for processing images and returning predictions.
- **Deep Learning Model**: TensorFlow-based model trained to classify multiple leaf diseases.
- **Real-time Predictions**: Upload an image and get instant results.
- **Multi-language Support**: Includes Hindi for better accessibility.

---

## 🔧 Tech Stack

### Frontend
- **React**: For building the user interface.
- **CSS**: For styling the application.

### Backend
- **FastAPI**: For creating the REST API.
- **TensorFlow**: For loading and making predictions with the trained deep learning model.
- **NumPy**: For handling numerical data.
- **Pillow (PIL)**: For image processing.
- **Uvicorn**: ASGI server for running the FastAPI app.

---

## 🚀 How It Works

1. **Frontend**:
   - Users upload an image of a leaf via the React-based interface.
   - The image is sent to the backend for processing.

2. **Backend**:
   - The uploaded image is preprocessed (resized to 128x128 pixels).
   - The TensorFlow model predicts the disease class and confidence.
   - The result is sent back to the frontend.

3. **Output**:
   - The frontend displays the predicted disease and confidence level.
   - If applicable, a solution link is provided for the detected disease.

---

## 📁 Model & Classes

The TensorFlow model (`trained_plant_disease_model.keras`) is trained to classify the following diseases:

```python
CLASS_NAMES = [
  "Bacterial Spot",
  "Pepper Healthy",
  "Potato Early Blight",
  "Potato Late Blight",
  "Potato Healthy",
  "Tomato Mosaic Virus",
  "Tomato Yellow Leaf Curl Virus",
  "Tomato Early Blight",
  "Tomato Late Blight",
  "Tomato Leaf Mold",
  "Tomato Septoria Leaf Spot",
  "Tomato Spider Mites Two Spotted",
  "Tomato Target Spot",
  "Tomato Bacterial Spot",
  "Tomato Healthy"
]
