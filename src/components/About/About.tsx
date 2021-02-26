import "./About.css";

export default function About() {
  return (
    <div id="about" className="about">
      <h1 className="greeting">
        <span className="greeting1"> Greetings! </span> <span className="greeting2"> I'm Elliott Jones. </span>
      </h1>
      <section className="aboutme typing">
        <p>I'm a Front-End Web Developer.</p>
        <p>I specialize in Javascript, React, React Native, Vue, and NodeJS.</p>
        <p>Check out some of my projects on github.</p>
        <p>Currently seeking new career opportunities.</p>
        <p>
          Inquiries at{" "}
          <a title="Contact Email" href="mailto:elliottohj44@gmail.com">
            <span>elliottohj44@gmail.com</span>
          </a>
        </p>
      </section>
    </div>
  );
}
// <h1>Alternatively, you could go to <a title="the outer kind, you know?" href="#space"><span className="fancy">Space</span></a>.</h1>
// <h1 className="greeting">
//   <span> Greetings! </span>
//   <span>  I'm  </span>
//   <span>  Elliott  </span>
//   <span>  Jones. </span>
// </h1>
