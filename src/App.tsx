import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About/About";
import BidEuchreTracker from "./components/BidEuchreTracker/BidEuchreTracker";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ProjectList from "./components/ProjectList/ProjectList";

const Home: React.FC = () => (
  <>
    <About />
    <ProjectList />
    <Contact />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <main className="home">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/bid-euchre-tracker"
            component={BidEuchreTracker}
          />
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
      </main>
    </Router>
  );
}

export default App;
