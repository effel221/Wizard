import React, {ChangeEvent, useCallback, useState} from "react";
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

type FormElemChange = <T extends HTMLInputElement | HTMLSelectElement>(e:ChangeEvent<T>, type: string) => void;

export interface StepProps {
    formContent: FormContentProps,
    formElemChange: FormElemChange,
    setFormContent?: (args:FormContentProps) => void
}


const App = () => {
    const [formContent, setFormContent] = useState<FormContentProps>({
        name: '',
        email: '',
        gender: 'Female',
        isAdult: false
    });
    const formElemChange:FormElemChange = useCallback((e, type) => {
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
                <Route exact path="/" render={props => <Step1 {...settings} />} />
                <Route path="/step/2"  render={props => <Step2  {...settings} setFormContent={setFormContent} />}  />
            </Switch>
        </Router>
    );
};

export default App;
