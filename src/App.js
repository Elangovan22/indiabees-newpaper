import NavBar from './NavBar';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactUs from './ContactUs';
import CreateNews from './CreateNews';
import DetailedItem from './DetailedItem';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar></NavBar>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/contact-us">
              <ContactUs />
            </Route>
            <Route path="/create">
              <CreateNews />
            </Route>
            <Route path="/news/:id">
              <DetailedItem />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
