import React from 'react';
import bacterial from './data/bacterial.json';
import "./Early_Blight.css"; // Reuse the same styling

const Pepper_Bacterial_Spot = () => {
  const solutions = [
    {
      name: "Copper-Based Bactericides",
      usage: [
        "Mix 1.5–2.0 kg of copper bactericide (e.g., Copper Oxychloride) in 200 liters of water per acre.",
        "Spray thoroughly covering all foliage, especially during early stages.",
        "Reapply every 7–10 days, especially after rain or irrigation."
      ]
    },
    {
      name: "Streptomycin Sulfate",
      usage: [
        "Use as per label recommendation (typically 100–200 ppm concentration).",
        "Apply during early morning or late evening to reduce sun impact.",
        "Limit usage to avoid resistance development."
      ]
    },
    {
      name: "Oxytetracycline-Based Products",
      usage: [
        "Mix according to label directions (generally 200–400 ppm).",
        "Spray during early infection stages or as preventive.",
        "Avoid overuse and rotate with copper bactericides."
      ]
    },
    {
      name: "Acibenzolar-S-methyl (Actigard)",
      usage: [
        "Use recommended dosage per label (commonly 25–50 g/acre).",
        "Apply preventively to activate plant’s systemic resistance.",
        "Combine with copper spray for better results."
      ]
    }
  ];

  return (
    <div className="solution-container" id="bacterial-spot">
      <h1>Pepper Bell Bacterial Spot Management</h1>
      <div>
        <img src={`/assets/${bacterial.imgSrc}`} alt="Bacterial Spot" />
      </div>

      {/* Necessary Steps Section */}
      <section className="steps-section">
        <h2>Necessary Steps to Manage Bacterial Spot</h2>
        <ol>
          <li>Use certified disease-free seeds or transplants.</li>
          <li>Practice crop rotation (avoid peppers and tomatoes in the same field successively).</li>
          <li>Remove and destroy infected plant parts promptly.</li>
          <li>Avoid overhead watering to reduce leaf wetness duration.</li>
          <li>Apply recommended bactericides as soon as symptoms appear.</li>
        </ol>
      </section>

      {/* Medicines Section */}
      <section className="medicine-section">
        <h2>Recommended Bactericides</h2>
        <ul>
          <li>Copper-Based Bactericides (e.g., Copper Oxychloride)</li>
          <li>Streptomycin Sulfate</li>
          <li>Oxytetracycline-Based Products</li>
          <li>Acibenzolar-S-methyl (Actigard)</li>
        </ul>
      </section>

      {/* How to Use Section */}
      <section className="usage-section">
        <h2>How to Use the Bactericides</h2>
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

export default Pepper_Bacterial_Spot;
