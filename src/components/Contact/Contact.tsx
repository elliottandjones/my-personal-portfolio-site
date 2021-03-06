import "./Contact.css";

export default function Contact() {
  return (
    <div id="contact" className="contact">
      <a
        className="icon email grow"
        href="mailto:elliottohj44@gmail.com"
        title="Email me!"
      >
        <i className="fas fa-envelope"></i>
      </a>
      <a
        className="icon github grow"
        href="https://github.com/elliottandjones"
        title="Check out my github!"
      >
        <i className="fab fa-github-square"></i>
      </a>
      <a
        className="icon linkedin grow"
        href="https://www.linkedin.com/in/elliott-jones-b1115434"
        title="Connect on linkedin!"
      >
        <i className="fab fa-linkedin"></i>
      </a>
    </div>
  );
}
