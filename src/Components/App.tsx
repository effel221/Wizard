import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import './App.scss'
import Step1 from "./Step1";
import Step2 from "./Step2";

export interface ComponentWithTitle {
    title: string
}

export interface FormContentProps {
    name?: string,
    email?: string,
    gender?: 'Male' | 'Female',
    isAdult?: boolean
}

export interface StepProps {
    formContent: FormContentProps,
    setFormContent: (args:FormContentProps) => void
}

const App = () => {
    const [formContent, setFormContent] = useState<FormContentProps>({});

    return (
        <Router>
            <Switch>
                <Route exact path="/" render={props => <Step1 formContent={formContent} setFormContent = {setFormContent} />} />
                <Route path="/step/2"  render={props => <Step2 formContent={formContent} setFormContent = {setFormContent} />}  />
            </Switch>
        </Router>
    );
};

export default App;
