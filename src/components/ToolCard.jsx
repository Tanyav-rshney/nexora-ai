
function ToolCard({ tool }) {

  return (

    <div className="tool-card">

      <div className="tool-top">

        <img
          src={tool.image}
          alt={tool.name}
        />

        <span>
          {tool.category}
        </span>

      </div>

      <h3>{tool.name}</h3>

      <p>{tool.description}</p>

      <a
        href={tool.link}
        target="_blank"
        rel="noopener noreferrer"
        className="tool-btn"
      >
        Explore →
      </a>

    </div>

  );
}

export default ToolCard;

