import React from 'react';
import mosaic from './data/mosaic.json';
import "./Early_Blight.css"; // Reusing the same CSS

const Tomato_Mosaic_Virus = () => {
  const solutions = [
    {
      name: "Roguing & Sanitation",
      usage: [
        "Remove and destroy infected plants immediately upon detection.",
        "Avoid composting infected debris—burn or bury instead.",
        "Disinfect all tools and hands after handling infected plants (use 10% bleach or 1% sodium hypochlorite)."
      ]
    },
    {
      name: "Use of Virus-Free Seeds",
      usage: [
        "Always purchase certified virus-free seeds from trusted suppliers.",
        "Avoid saving seeds from infected plants.",
        "Treat seeds with trisodium phosphate (TSP) solution before sowing if needed."
      ]
    },
    {
      name: "Resistant Varieties",
      usage: [
        "Use tomato cultivars that are resistant to Tomato Mosaic Virus (TMV).",
        "Check seed packaging or consult local agriculture extension for resistant options."
      ]
    },
    {
      name: "Barrier Practices",
      usage: [
        "Limit human and insect movement between infected and healthy plants.",
        "Wash hands thoroughly before working with healthy plants.",
        "Avoid smoking or using tobacco products around tomato plants, as tobacco can carry the virus."
      ]
    }
  ];

  return (
    <div className="solution-container" id="mosaic-virus">
      <h1>Tomato Mosaic Virus Management</h1>
      <div>
        <img src={`/assets/${mosaic.imgSrc}`} alt="Tomato Mosaic Virus" />
      </div>

      {/* Necessary Steps Section */}
      <section className="steps-section">
        <h2>Necessary Steps to Manage Tomato Mosaic Virus</h2>
        <ol>
          <li>Monitor for mottled, distorted leaves and stunted growth.</li>
          <li>Immediately remove infected plants to stop the spread.</li>
          <li>Practice strict tool and hand sanitation between plants.</li>
          <li>Plant resistant tomato varieties whenever available.</li>
          <li>Use virus-free seeds and certified transplants.</li>
        </ol>
      </section>

      {/* Treatments Section */}
      <section className="medicine-section">
        <h2>Recommended Management Practices</h2>
        <ul>
          <li>Roguing & Sanitation</li>
          <li>Use of Virus-Free Seeds</li>
          <li>Resistant Varieties</li>
          <li>Barrier Practices</li>
        </ul>
      </section>

      {/* How to Use Section */}
      <section className="usage-section">
        <h2>How to Apply These Practices</h2>
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

export default Tomato_Mosaic_Virus;
