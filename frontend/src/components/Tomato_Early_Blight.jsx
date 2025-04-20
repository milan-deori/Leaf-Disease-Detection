import React from 'react';
import tomatoEarly from './data/tomato_early.json';
import "./Early_Blight.css"; // Reusing same CSS

const Tomato_Early_Blight = () => {
  const solutions = [
    {
      name: "Chlorothalonil (Bravo)",
      usage: [
        "Mix 1.5–2.0 liters of Chlorothalonil in 200–300 liters of water per acre.",
        "Spray thoroughly, ensuring coverage of all foliage.",
        "Reapply every 7–10 days or after rainfall."
      ]
    },
    {
      name: "Mancozeb (Dithane M-45)",
      usage: [
        "Mix 2.0–2.5 kg per acre in water (200–300 liters).",
        "Start spraying at the first sign of symptoms.",
        "Repeat every 10–14 days for continuous control."
      ]
    },
    {
      name: "Azoxystrobin (Quadris)",
      usage: [
        "Apply the recommended dose as per product label.",
        "Ensure both upper and lower leaf surfaces are covered.",
        "Use as a preventive or at first signs of early blight."
      ]
    },
    {
      name: "Crop Rotation & Resistant Varieties",
      usage: [
        "Avoid planting tomatoes in the same location consecutively.",
        "Select blight-resistant tomato varieties for cultivation.",
        "Practice proper spacing and pruning for better airflow."
      ]
    }
  ];

  return (
    <div className="solution-container" id="tomato-early-blight">
      <h1>Tomato Early Blight Management</h1>
      <div>
        <img src={`/assets/${tomatoEarly.imgSrc}`} alt="Tomato Early Blight" />
      </div>

      {/* Steps Section */}
      <section className="steps-section">
        <h2>Necessary Steps to Manage Tomato Early Blight</h2>
        <ol>
          <li>Look for concentric ring patterns (bullseye) on older leaves.</li>
          <li>Remove infected lower leaves and debris from the field.</li>
          <li>Improve ventilation by spacing and staking plants.</li>
          <li>Apply fungicides at first detection or during favorable conditions.</li>
          <li>Use disease-free seeds and rotate crops every season.</li>
        </ol>
      </section>

      {/* Medicines Section */}
      <section className="medicine-section">
        <h2>Recommended Fungicides and Practices</h2>
        <ul>
          <li>Chlorothalonil (Bravo)</li>
          <li>Mancozeb (Dithane M-45)</li>
          <li>Azoxystrobin (Quadris)</li>
          <li>Cultural practices like crop rotation and pruning</li>
        </ul>
      </section>

      {/* Usage Section */}
      <section className="usage-section">
        <h2>How to Use the Treatments</h2>
        {solutions.map((solution, index) => (
          <div className="solution-card" key={index}>
            <h2>{solution.name}</h2>
            <ol>
              {solution.usage.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Tomato_Early_Blight;
