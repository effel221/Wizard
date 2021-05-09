import React, {useCallback, useState} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import './App.scss'
import Step1 from "./Step1";
import Step2 from "./Step2";
import "regenerator-runtime/runtime";
import {FormContentProps, FormElemChange} from "./Interfaces";

// Main/parent component with routing
const App = () => {
// Declared default properties for form fields values
    const [formContent, setFormContent] = useState<FormContentProps>({
        name: '',
        email: '',
        gender: 'Female',
        isAdult: false
    });

// Helper to add most actions for form fields
    const formElemChange: FormElemChange = useCallback((e, type) => {
        const obj = {
            ...formContent,
            [type]: e.target.value
        };
        setFormContent(obj);
    }, [formContent]);

    const settings = {
        formContent,
        formElemChange
    };

    return (
        <Router>
            <Switch>
                <Route exact path="/" render={props => <Step1 {...settings} />}/>
                <Route path="/step/2" render={props => <Step2  {...settings} setFormContent={setFormContent}/>}/>
            </Switch>
        </Router>
    );
};

export default App;
