import "./App.css";
import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";
import Widgets from "./components/Widgets";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/home">
            <Sidebar />
            <Feed />
            <Widgets />
          </Route>
          <Route path="/profile">
            <Sidebar />
            <Profile />
            <Widgets />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
