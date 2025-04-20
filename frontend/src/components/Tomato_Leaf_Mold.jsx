import React from 'react';
import tomatoLeafMold from './data/tomato_leaf_mold.json';
import "./Early_Blight.css"; // Reusing existing styles

const Tomato_Leaf_Mold = () => {
  const solutions = [
    {
      name: "Chlorothalonil (Bravo)",
      usage: [
        "Mix 1.5–2.0 liters of fungicide in 200–300 liters of water per acre.",
        "Spray thoroughly on all leaf surfaces, especially the lower side.",
        "Repeat every 7–10 days or after rain."
      ]
    },
    {
      name: "Copper-Based Fungicides",
      usage: [
        "Use 2.0–2.5 kg per acre, mixed with water as per label.",
        "Apply in the early stages of infection or preventively.",
        "Ensure good coverage and repeat every 10 days if needed."
      ]
    },
    {
      name: "Mancozeb (Dithane M-45)",
      usage: [
        "Mix 2.0–2.5 kg in 200–300 liters of water per acre.",
        "Spray at the first appearance of yellow spots or mold growth.",
        "Apply at intervals of 7–10 days during humid conditions."
      ]
    },
    {
      name: "Cultural Practices",
      usage: [
        "Ensure good air circulation by pruning lower leaves.",
        "Avoid overhead watering to reduce humidity.",
        "Use resistant tomato varieties if available."
      ]
    }
  ];

  return (
    <div className="solution-container" id="tomato-leaf-mold">
      <h1>Tomato Leaf Mold Management</h1>
      <div>
        <img src={`/assets/${tomatoLeafMold.imgSrc}`} alt="Tomato Leaf Mold" />
      </div>

      {/* Necessary Steps Section */}
      <section className="steps-section">
        <h2>Necessary Steps to Manage Tomato Leaf Mold</h2>
        <ol>
          <li>Look for yellow spots on the upper leaf surface and grayish mold on the underside.</li>
          <li>Remove and destroy infected leaves.</li>
          <li>Improve ventilation in the greenhouse or field.</li>
          <li>Water early in the day to allow leaves to dry quickly.</li>
          <li>Apply fungicides at the first sign of symptoms.</li>
        </ol>
      </section>

      {/* Medicines Section */}
      <section className="medicine-section">
        <h2>Recommended Fungicides and Practices</h2>
        <ul>
          <li>Chlorothalonil (Bravo)</li>
          <li>Copper-Based Fungicides</li>
          <li>Mancozeb (Dithane M-45)</li>
          <li>Proper pruning and ventilation</li>
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

export default Tomato_Leaf_Mold;