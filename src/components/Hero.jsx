
function Hero() {

  const scrollToTools = () => {

    const section =
      document.getElementById("tools");

    if(section){

      section.scrollIntoView({
        behavior:"smooth"
      });

    }
  };

  const scrollToTrending = () => {

    const section =
      document.getElementById("trending");

    if(section){

      section.scrollIntoView({
        behavior:"smooth"
      });

    }
  };

  return (

    <section className="hero">

      <div className="hero-badge">
        🚀 100+ AI Tools Available
      </div>

      <h1>
        Discover The Future <br />
        Of AI Tools
      </h1>

      <p>
        Explore powerful AI tools for coding,
        design, productivity, automation,
        image generation and more.
      </p>

      <div className="hero-buttons">

        <button
          className="primary-btn"
          onClick={scrollToTools}
        >
          Explore Tools
        </button>

        <button
          className="secondary-btn"
          onClick={scrollToTrending}
        >
          Trending AI
        </button>

      </div>

    </section>
  );
}

export default Hero;

