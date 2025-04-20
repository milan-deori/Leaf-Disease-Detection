import React from 'react';
import yellowleafcurl from './data/yellowleafcurl.json';
import "./Early_Blight.css"; // Reuse existing styles

const Tomato_ycv = () => {
  const solutions = [
    {
      name: "Whitefly Control (Insecticide Application)",
      usage: [
        "Apply insecticides like Imidacloprid or Thiamethoxam at early stages to control whitefly population.",
        "Mix as per label instructions and apply with a knapsack sprayer.",
        "Repeat applications every 7–10 days depending on infestation level."
      ]
    },
    {
      name: "Resistant Varieties",
      usage: [
        "Use tomato cultivars bred for resistance against TYLCV.",
        "Check seed catalogs or agricultural extension services for recommendations."
      ]
    },
    {
      name: "Crop Rotation & Field Hygiene",
      usage: [
        "Avoid planting tomatoes in the same field season after season.",
        "Remove and destroy infected plants and weeds that may host whiteflies.",
        "Maintain weed-free buffer zones around the tomato field."
      ]
    },
    {
      name: "Use of Reflective Mulch",
      usage: [
        "Lay reflective (silver-colored) plastic mulch to repel whiteflies.",
        "Place mulch before transplanting to provide maximum protection.",
        "Combine with insecticides for enhanced effectiveness."
      ]
    }
  ];

  return (
    <div className="solution-container" id="yellowleafcurl">
      <h1>Tomato Yellow Leaf Curl Virus Management</h1>
      <div>
        <img src={`/assets/${yellowleafcurl.imgSrc}`} alt="Tomato Yellow Leaf Curl Virus" />
      </div>

      {/* Necessary Steps Section */}
      <section className="steps-section">
        <h2>Necessary Steps to Manage TYLCV</h2>
        <ol>
          <li>Monitor for curled, yellowing leaves and stunted growth.</li>
          <li>Control whiteflies early using insecticides and physical barriers.</li>
          <li>Remove infected plants immediately to reduce viral spread.</li>
          <li>Use reflective mulches and resistant tomato varieties.</li>
          <li>Practice good field sanitation and rotate crops regularly.</li>
        </ol>
      </section>

      {/* Recommendations Section */}
      <section className="medicine-section">
        <h2>Recommended Management Strategies</h2>
        <ul>
          <li>Whitefly Control (Imidacloprid, Thiamethoxam)</li>
          <li>Use of Resistant Varieties</li>
          <li>Crop Rotation & Field Hygiene</li>
          <li>Reflective Mulch Application</li>
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

export default Tomato_ycv;
