import { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from './components/About/About'
// import ContactForm from './components/ContactForm/ContactForm'
import MyForm from './components/ContactForm/MyForm'
import Footer from './components/Footer/Footer'
import ProjectList from './components/ProjectList/ProjectList'
import Socials from './components/Socials/Socials'

class App extends Component {
  render() {
    return (
      <Router>
        <main className="main">
          <Route path="/" exact>
            <div className="home">
              <About />
              <ProjectList />
              <MyForm />
              {/* <ContactForm /> */}
              <Socials />
              <Footer />
            </div>
          </Route>
          {/* <Route path="/tetros"></Route>
          <Route path="/conjuring"></Route>
          <Route path="/space"></Route> */}
        </main>
      </Router>
    )
  }
}

export default App
