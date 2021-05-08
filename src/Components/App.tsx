import React, {useEffect} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import './App.scss'
import Step1 from "./Step1";
import Step2 from "./Step2";



const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact component={Step1} path="/"/>
                <Route component={Step2} path="/step/2"/>
            </Switch>
        </Router>
    );
};

export default App;
