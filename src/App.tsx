import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from './components/About/About'
import ContactForm from './components/ContactForm/ContactForm'
import Footer from './components/Footer/Footer'
import ProjectList from './components/ProjectList/ProjectList'
import Socials from './components/Socials/Socials'

function App() {
  return (
    <Router>
      <main className="main">
        <Route path="/" exact>
          <div className="home">
            <About />
            <ProjectList />
            <ContactForm />
            <Socials />
            <Footer />
          </div>
        </Route>
        {/* <Route path="/tetris"></Route>
        <Route path="/conjuring"></Route>
        <Route path="/space"></Route> */}
      </main>
    </Router>
  )
}

export default App
