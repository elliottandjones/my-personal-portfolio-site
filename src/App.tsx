import { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ProjectList from "./components/ProjectList/ProjectList";

class App extends Component {
  render() {
    return (
      <Router>
        <main className="main">
          <Route path="/" exact>
            <div className="home">
              <About />
              <ProjectList />
              <Contact />
              <Footer />
            </div>
          </Route>
          {/* <Route path="/tetros"></Route>
          <Route path="/conjuring"></Route>
          <Route path="/space"></Route> */}
        </main>
      </Router>
    );
  }
}

export default App;
