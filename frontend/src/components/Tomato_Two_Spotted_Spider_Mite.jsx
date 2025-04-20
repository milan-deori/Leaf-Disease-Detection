import React from 'react';
import spiderMite from './data/tomato_two_spotted_spider_mite.json';
import "./Early_Blight.css";

const Tomato_Two_Spotted_Spider_Mite = () => {
  const solutions = [
    {
      name: "Abamectin (Vertimec or Agri-Mek)",
      usage: [
        "Use 0.5–1.0 ml per liter of water (check label instructions).",
        "Apply thoroughly to the underside of leaves where mites reside.",
        "Repeat applications every 7–10 days if needed."
      ]
    },
    {
      name: "Spiromesifen (Oberon)",
      usage: [
        "Mix 1–1.5 ml per liter of water.",
        "Spray when early signs of mite infestation appear.",
        "Effective against eggs, nymphs, and adult mites."
      ]
    },
    {
      name: "Neem Oil (Organic Option)",
      usage: [
        "Mix 30 ml neem oil with 1 liter of water + mild soap.",
        "Spray early in the morning or late afternoon to avoid leaf burn.",
        "Repeat every 5–7 days until mites are under control."
      ]
    },
    {
      name: "Cultural Practices",
      usage: [
        "Remove heavily infested leaves and weeds near the crop.",
        "Avoid water stress—keep plants healthy and well irrigated.",
        "Introduce natural predators like ladybugs or predatory mites."
      ]
    }
  ];

  return (
    <div className="solution-container" id="spider-mite">
      <h1>Tomato Two-Spotted Spider Mite Management</h1>
      <div>
        <img src={`/assets/${spiderMite.imgSrc}`} alt="Two-Spotted Spider Mite" />
      </div>

      {/* Necessary Steps Section */}
      <section className="steps-section">
        <h2>Necessary Steps to Manage Spider Mites</h2>
        <ol>
          <li>Inspect leaves regularly for tiny yellow specks and webbing.</li>
          <li>Remove and destroy heavily infested leaves.</li>
          <li>Avoid pesticide overuse which can kill natural predators.</li>
          <li>Keep the environment humid—mites prefer dry conditions.</li>
          <li>Use recommended miticides or natural remedies promptly.</li>
        </ol>
      </section>

      {/* Treatments Section */}
      <section className="medicine-section">
        <h2>Recommended Miticides and Remedies</h2>
        <ul>
          <li>Abamectin (Vertimec)</li>
          <li>Spiromesifen (Oberon)</li>
          <li>Neem Oil</li>
          <li>Biological Control (Predatory Mites)</li>
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

export default Tomato_Two_Spotted_Spider_Mite;
