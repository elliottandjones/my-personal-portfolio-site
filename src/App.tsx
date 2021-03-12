import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About/About";
import BidEuchreTracker from "./components/BidEuchreTracker/BidEuchreTracker";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ProjectList from "./components/ProjectList/ProjectList";

const Home: React.FC = () => {
  return (
    <main className="home">
      <About />
      <ProjectList />
      <Contact />
      <Footer />
    </main>
  )
}

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/bid-euchre-tracker" exact component={BidEuchreTracker}>
          
        </Route>
        {/* <Route path="/tetros"></Route>
        <Route path="/conjuring"></Route>
      <Route path="/space"></Route> */}
        <Route
          path="/"
          render={() => (
            <div style={{ textAlign: "center" }}>
              <h1>404</h1>
            </div>
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
