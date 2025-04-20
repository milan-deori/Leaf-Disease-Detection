import React from 'react';
import septoria from './data/tomato_septoria_leaf_spot.json';
import "./Early_Blight.css"; // Reuse existing styles

const Tomato_Septoria_Leaf_Spot = () => {
  const solutions = [
    {
      name: "Chlorothalonil (Bravo)",
      usage: [
        "Mix 1.5–2.0 liters in 200–300 liters of water per acre.",
        "Spray thoroughly, focusing on lower and older leaves.",
        "Repeat every 7–10 days for continued protection."
      ]
    },
    {
      name: "Mancozeb (Dithane M-45)",
      usage: [
        "Use 2.0–2.5 kg in sufficient water per acre.",
        "Start spraying at first symptoms and repeat weekly.",
        "Helps prevent fungal spore spread."
      ]
    },
    {
      name: "Copper-Based Fungicides",
      usage: [
        "Apply as per label (1.5–2.0 kg in 200–300 liters of water).",
        "Best used preventively or at early signs of infection.",
        "Ensure good coverage and avoid spraying before rain."
      ]
    },
    {
      name: "Cultural Practices",
      usage: [
        "Remove and destroy infected leaves immediately.",
        "Avoid overhead irrigation and provide good plant spacing.",
        "Practice crop rotation and avoid planting in the same soil for consecutive years."
      ]
    }
  ];

  return (
    <div className="solution-container" id="septoria-leaf-spot">
      <h1>Tomato Septoria Leaf Spot Management</h1>
      <div>
        <img src={`/assets/${septoria.imgSrc}`} alt="Tomato Septoria Leaf Spot" />
      </div>

      {/* Necessary Steps Section */}
      <section className="steps-section">
        <h2>Necessary Steps to Manage Septoria Leaf Spot</h2>
        <ol>
          <li>Look for small, water-soaked spots with dark borders on lower leaves.</li>
          <li>Remove infected leaves and clean garden debris.</li>
          <li>Improve air circulation around the plants.</li>
          <li>Use drip irrigation to keep foliage dry.</li>
          <li>Apply recommended fungicides regularly during wet or humid conditions.</li>
        </ol>
      </section>

      {/* Medicines Section */}
      <section className="medicine-section">
        <h2>Recommended Fungicides and Practices</h2>
        <ul>
          <li>Chlorothalonil (Bravo)</li>
          <li>Mancozeb (Dithane M-45)</li>
          <li>Copper-Based Fungicides</li>
          <li>Crop rotation and pruning</li>
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

export default Tomato_Septoria_Leaf_Spot;
