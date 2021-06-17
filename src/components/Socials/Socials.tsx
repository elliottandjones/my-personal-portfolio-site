import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import './Socials.css'

export default function Socials() {
  return (
    <section id="socials" className="socials">
      <a className="icon email grow" href="mailto:elliottohj44@gmail.com" title="Email me!">
        <FaEnvelope />
      </a>
      <a
        className="icon github grow"
        href="https://github.com/elliottandjones"
        title="Check out my github!"
      >
        <FaGithub />
      </a>
      <a
        className="icon linkedin grow"
        href="https://www.linkedin.com/in/elliott-jones-b1115434"
        title="Connect on linkedin!"
      >
        <FaLinkedin />
      </a>
    </section>
  )
}
