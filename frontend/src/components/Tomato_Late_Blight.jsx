import React from 'react';
import tomatoLate from './data/tomato_late.json';
import "./Early_Blight.css"; // Reusing the existing CSS

const Tomato_Late_Blight = () => {
  const solutions = [
    {
      name: "Metalaxyl + Mancozeb (Ridomil Gold)",
      usage: [
        "Mix 2.5 grams per liter of water (approx. 500g per acre).",
        "Spray thoroughly covering all plant parts.",
        "Repeat every 7–10 days during high-risk periods."
      ]
    },
    {
      name: "Chlorothalonil (Bravo)",
      usage: [
        "Use 1.5–2.0 liters in 200–300 liters of water per acre.",
        "Apply preventively or at the first sign of symptoms.",
        "Continue spraying every 7 days during wet conditions."
      ]
    },
    {
      name: "Copper Oxychloride",
      usage: [
        "Mix 2.0–2.5 kg per acre in water.",
        "Ensure thorough coverage on both sides of leaves.",
        "Best used as a preventive application."
      ]
    },
    {
      name: "Cultural Practices",
      usage: [
        "Destroy infected plants and avoid overhead irrigation.",
        "Use resistant tomato varieties if available.",
        "Rotate crops and avoid planting tomatoes near potatoes."
      ]
    }
  ];

  return (
    <div className="solution-container" id="tomato-late-blight">
      <h1>Tomato Late Blight Management</h1>
      <div>
        <img src={`/assets/${tomatoLate.imgSrc}`} alt="Tomato Late Blight" />
      </div>

      {/* Necessary Steps Section */}
      <section className="steps-section">
        <h2>Necessary Steps to Manage Tomato Late Blight</h2>
        <ol>
          <li>Watch for large, irregularly shaped dark lesions on leaves and stems.</li>
          <li>Remove and destroy infected plants immediately.</li>
          <li>Ensure proper spacing for airflow and reduce leaf wetness.</li>
          <li>Avoid overhead watering, especially in humid weather.</li>
          <li>Apply fungicides proactively during cool and wet conditions.</li>
        </ol>
      </section>

      {/* Medicines Section */}
      <section className="medicine-section">
        <h2>Recommended Fungicides and Practices</h2>
        <ul>
          <li>Metalaxyl + Mancozeb (Ridomil Gold)</li>
          <li>Chlorothalonil (Bravo)</li>
          <li>Copper Oxychloride</li>
          <li>Crop rotation and field sanitation</li>
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

export default Tomato_Late_Blight;
