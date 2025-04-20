import React from 'react';
import target from './data/target.json';
import "./Early_Blight.css"; // Reusing the same CSS

const Tomato_Target_Spot = () => {
  const solutions = [
    {
      name: "Chlorothalonil (Bravo)",
      usage: [
        "Mix 1.5–2.0 liters of fungicide in 200–300 liters of water per acre.",
        "Spray thoroughly, especially the lower and shaded leaves.",
        "Repeat every 7–10 days or after rainfall."
      ]
    },
    {
      name: "Azoxystrobin (Quadris)",
      usage: [
        "Use as per label recommendation (commonly 0.1% solution).",
        "Ensure full coverage of leaves and stems.",
        "Apply preventively or at the first sign of disease."
      ]
    },
    {
      name: "Tebuconazole + Trifloxystrobin (Nativo)",
      usage: [
        "Mix 0.5–1.0 gm per liter of water.",
        "Spray early in the morning or late afternoon for best results.",
        "Repeat every 10 days during active infection periods."
      ]
    },
    {
      name: "Copper-Based Fungicides",
      usage: [
        "Mix 1.5–2.0 kg in 200 liters of water per acre.",
        "Avoid application in very hot weather to reduce phytotoxicity.",
        "Reapply every 7–10 days for consistent control."
      ]
    }
  ];

  return (
    <div className="solution-container" id="target-spot">
      <h1>Tomato Target Spot Management</h1>
      <div>
        <img src={`/assets/${target.imgSrc}`} alt="Target Spot" />
      </div>

      {/* Necessary Steps Section */}
      <section className="steps-section">
        <h2>Necessary Steps to Manage Target Spot</h2>
        <ol>
          <li>Inspect tomato leaves regularly for small dark spots with yellow halos.</li>
          <li>Remove and destroy infected plant debris from the field.</li>
          <li>Ensure good air circulation by pruning and staking the plants properly.</li>
          <li>Water at the base of plants to keep leaves dry.</li>
          <li>Apply fungicides as soon as symptoms appear.</li>
        </ol>
      </section>

      {/* Medicines Section */}
      <section className="medicine-section">
        <h2>Recommended Fungicides</h2>
        <ul>
          <li>Chlorothalonil (Bravo)</li>
          <li>Azoxystrobin (Quadris)</li>
          <li>Tebuconazole + Trifloxystrobin (Nativo)</li>
          <li>Copper-Based Fungicides</li>
        </ul>
      </section>

      {/* How to Use Section */}
      <section className="usage-section">
        <h2>How to Use the Fungicides</h2>
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

export default Tomato_Target_Spot;
