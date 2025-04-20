import React, { useState } from "react";
import axios from "axios";
import "./home.css"; // Custom CSS file
import { IoCloudUploadOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';



function ImageUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        // Set max dimensions for image preview
        const MAX_WIDTH = 256;
        const MAX_HEIGHT = 256;

        // Create a canvas to resize the image
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        // Set new dimensions for the canvas
        canvas.width = MAX_WIDTH;
        canvas.height = MAX_HEIGHT;

        // Draw the resized image on the canvas
        ctx.drawImage(img, 0, 0, MAX_WIDTH, MAX_HEIGHT);

        // Convert the canvas back to a Blob and then to a file
        canvas.toBlob((blob) => {
          const resizedFile = new File([blob], file.name, {
            type: "image/jpeg",
            lastModified: Date.now(),
          });

          setSelectedFile(resizedFile); // Set resized file
          setImagePreview(URL.createObjectURL(resizedFile)); // Preview the image
        }, "image/jpeg", 0.8); // Compress image quality to 80%
      };
    };
  };
  const baseStyle = {
    marginTop: '15px',
    fontSize: '2em',
    fontFamily: 'poppins, sans-serif',
    color: isHovered ? '#F0F1C5' : '#3F7D58',
    transition: 'color 0.3s ease, transform 0.3s ease',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    cursor: 'pointer',
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      alert("Please upload an image file.");
      return;
    }

    setLoading(true); // Show loading state
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      // Send POST request to backend API for prediction
      const response = await axios.post("http://localhost:8000/predict", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setPrediction(response.data); // Store prediction result
    } catch (error) {
      toast.error("Oops! Error occurred. Please try again.");
    } finally {
      setLoading(false); // Stop loading state
    }
  };

  return (
    <>
      <div className="upload-wrapper">
        <div className="wrap">
          <div className="h-container">
            <h1 className="header">Leaf Disease Detection</h1>
            <h1 className="header" style={{marginTop:"1.5rem"}}>पत्ती रोग पहचान</h1>
          </div>
          <h1
            style={baseStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            "Cultivating Quality, Harvesting Happiness"
          </h1>
          <div className="content-wrapper">
            <div className="app">
              <form onSubmit={handleSubmit}>
                <div className="preview-and-result">
                  <label htmlFor="image-upload-input" className="upload-label">
                    {imagePreview ? (
                      <div className="image-preview">
                        <img src={imagePreview} alt="Selected" />
                      </div>
                    ) : (
                      <div>
                        <IoCloudUploadOutline className="icon" />
                      </div>
                    )}
                    <div>{imagePreview ? false : "Click to Choose an Image"}</div>
                  </label>
                </div>

                <input
                  id="image-upload-input"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />

                <button type="submit" disabled={loading}>
                  {loading ? "Analyzing..." : "Predict"}
                </button>
              </form>
            </div>

            {prediction && (
              <div className="result">
                <h2 style={{textAlign:"center", marginTop:0}}>Result:</h2>
                <div className="mainresult">
                  <p>
                    <strong>Disease:</strong> {prediction.class}
                  </p>
                  <p>
                    <strong>Confidence:</strong> {(prediction.confidence * 100).toFixed(2)}%
                  </p>
                </div>
                {prediction.class === "Potato_Early_Blight" && (
                  <button className="btn">
                    <Link to={"/Early-Blight"} className="link">Show Solution</Link>
                  </button>
                )}
                {prediction.class === "Potato_Late_Blight" && (
                  <button className="btn">
                    <Link to={"/Late-Blight"} className="link">Show Solution</Link>
                  </button>
                )}
                {prediction.class === "Bacterial Spot" && (
                  <button className="btn">
                    <Link to={"/Pepper-Bacterial-Spot"} className="link">Show Solution</Link>
                  </button>
                )}
                {prediction.class === "Target_Spot" && (
                  <button className="btn">
                    <Link to={"/Tomato-Target-Spot"} className="link">Show Solution</Link>
                  </button>
                )}
                {prediction.class === "Mosaic_virus" && (
                  <button className="btn">
                    <Link to={"/Tomato-Mosaic-Virus"} className="link">Show Solution</Link>
                  </button>
                )}
                {prediction.class === "YellowLeaf_Curl_Virus" && (
                  <button className="btn">
                    <Link to={"/Tomato-ycv"} className="link">Show Solution</Link>
                  </button>
                )}
                {prediction.class === "Bacterial_spot" && (
                  <button className="btn">
                    <Link to={"/Tomato-Bacterial-Spot"} className="link">Show Solution</Link>
                  </button>
                )}
                {prediction.class === "Tomato_Early_Blight" && (
                  <button className="btn">
                    <Link to={"/Tomato-Early-Blight"} className="link">Show Solution</Link>
                  </button>
                )}
                {prediction.class === "Tomato_Late_Blight" && (
                  <button className="btn">
                    <Link to={"/Tomato-Late-Blight"} className="link">Show Solution</Link>
                  </button>
                )}
                  {prediction.class === "Leaf_Mold" && (
                  <button className="btn">
                    <Link to={"/Tomato-Leaf-Mold"} className="link">Show Solution</Link>
                  </button>
                )}
                 {prediction.class === "Septoria_Leaf_Spot" && (
                  <button className="btn">
                    <Link to={"Tomato-Leaf-Septoria"} className="link">Show Solution</Link>
                  </button>
                )}
                {prediction.class === "Spider_Mites_Two_Spotted" && (
                  <button className="btn">
                    <Link to={"/Tomato-Spider-Mite"} className="link">Show Solution</Link>
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageUpload;
