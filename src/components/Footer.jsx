import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <h2>Built with ❤️ by Tanya</h2>

      <p>Let’s connect and build amazing things together 🚀</p>

      <div className="social-icons">
        
        <a
          href="https://www.linkedin.com/in/tanya-varshney-069839348/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/Tanyav-rshney" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/tanyav_rshney102/" target="_blank">
          <FaInstagram />
        </a>
        <a href="mailto:tv728879@gmail.com">
          <FaEnvelope />
        </a>
        
      </div>
    </footer>
  );
}

export default Footer;
