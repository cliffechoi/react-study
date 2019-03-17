import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./Home";
import Scoreboard from "./scoreboard/Scoreboard";
import 'bootstrap/dist/css/bootstrap.css';
import Menu from "./Menu";
import Heroes from "./heroes/Heroes";

export default class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <Menu/>
        <div className="container" style={{backgroundColor: '#ffffff'}}>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/heroes" component={Heroes}/>
            <Route path="/scoreboard" component={Scoreboard}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}