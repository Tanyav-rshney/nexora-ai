import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ToolCard from "./components/ToolCard";
import toolsData from "./data/toolsData";
import ParticlesBg from "./components/ParticlesBg";
import Footer from "./components/Footer";

function App() {
  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Productivity",
    "Coding",
    "Image",
    "Design",
    "Voice",
    "Video",
    "Automation",
  ];

  const filteredTools = toolsData.filter((tool) => {
    const matchesSearch = tool.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory = category === "All" || tool.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar />
      <ParticlesBg />
      <Hero />
     

      {/* ================= TOOLS SECTION ================= */}

      <section className="tools-section" id="tools">
        <div className="tools-top">
          <div className="section-title" id="trending">
            Trending AI Tools
          </div>

          <input
            type="text"
            placeholder="Search AI tools..."
            className="search-input"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* ================= CATEGORY BUTTONS ================= */}

        <div className="category-buttons">
          {categories.map((item) => (
            <button
              key={item}
              className={
                category === item
                  ? "category-btn active-category"
                  : "category-btn"
              }
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        {/* ================= TOOL CARDS ================= */}

        <div className="tools-grid">
          {filteredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}

      <section className="about-section" id="about">
        <h2>About Nexora AI</h2>

        <p>
          Nexora AI is a futuristic platform to explore the best AI tools for
          coding, productivity, design, image generation, automation and more.
          Built using React with modern UI and interactive user experience.
        </p>
      </section>
      <Footer />
    </>
  );
}

export default App;
