import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/header/Header";
import HomePageView from "./components/pages/HomePageView";
import BasicTacticsView from "./components/pages/tactics/BasicTacticsView";
import PlayersView from "./components/pages/players/PlayersView.js";
import MatchPreparationView from "./components/pages/matchpreparation/MatchPreparationView";
import TrainingAndDevelopmentHome from "./components/pages/traininganddevelopment/TrainingAndDevelopmentView";
import ScoutingAndTransfersView from "./components/pages/scoutingandtransfers/ScoutingAndTransfersView";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/home" component={HomePageView} />
          <Route exact path="/tactics" component={BasicTacticsView} />
          <Route exact path="/players" component={PlayersView} />
          <Route
            exact
            path="/matchpreparation"
            component={MatchPreparationView}
          />
          <Route
            exact
            path="/traininganddevelopment"
            component={TrainingAndDevelopmentHome}
          />
          <Route
            exact
            path="/scoutingandtransfers"
            component={ScoutingAndTransfersView}
          />
        </div>
      </Router>
    );
  }
}

export default App;
