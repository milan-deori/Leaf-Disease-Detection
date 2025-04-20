import React from 'react';
import tomatoBacterial from './data/tomato_bacterial.json';
import "./Early_Blight.css"; // Reusing same styles

const Tomato_Bacterial_Spot = () => {
  const solutions = [
    {
      name: "Copper-Based Bactericides",
      usage: [
        "Mix 1.5–2.0 kg of copper oxychloride or copper hydroxide in 200 liters of water per acre.",
        "Spray thoroughly on foliage every 7–10 days during wet/humid conditions.",
        "Avoid spraying during hot midday hours to prevent phytotoxicity."
      ]
    },
    {
      name: "Streptomycin Sulfate (Agrimycin-100)",
      usage: [
        "Apply only under guidance and according to label instructions.",
        "Mix 100 g in 200 liters of water per acre for foliar application.",
        "Rotate with copper-based products to prevent resistance buildup."
      ]
    },
    {
      name: "Seed Treatment",
      usage: [
        "Treat seeds with hot water (50°C for 25 minutes) to eliminate pathogens.",
        "Dry seeds completely before sowing.",
        "Alternatively, treat seeds with bactericide or fungicide labeled for bacterial spot."
      ]
    },
    {
      name: "Cultural Practices",
      usage: [
        "Use disease-free certified seeds or seedlings.",
        "Avoid working in fields when plants are wet to reduce spread.",
        "Practice crop rotation for at least 2 seasons before replanting tomatoes."
      ]
    }
  ];

  return (
    <div className="solution-container" id="tomato-bacterial">
      <h1>Tomato Bacterial Spot Management</h1>
      <div>
        <img src={`/assets/${tomatoBacterial.imgSrc}`} alt="Tomato Bacterial Spot" />
      </div>

      {/* Steps Section */}
      <section className="steps-section">
        <h2>Necessary Steps to Manage Tomato Bacterial Spot</h2>
        <ol>
          <li>Look for small, water-soaked spots on leaves and fruits that turn brown or black.</li>
          <li>Remove and destroy infected plants or plant parts early.</li>
          <li>Implement good sanitation—clean tools, trays, and avoid working with wet plants.</li>
          <li>Improve airflow between plants by proper spacing and weeding.</li>
          <li>Apply bactericides preventively or at the first sign of symptoms.</li>
        </ol>
      </section>

      {/* Medicines Section */}
      <section className="medicine-section">
        <h2>Recommended Treatments</h2>
        <ul>
          <li>Copper-Based Bactericides (Copper Oxychloride, Copper Hydroxide)</li>
          <li>Streptomycin Sulfate (Agrimycin-100)</li>
          <li>Hot Water Seed Treatment</li>
          <li>Good Cultural Practices</li>
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

export default Tomato_Bacterial_Spot;
