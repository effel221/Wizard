import React, {FunctionComponent, ChangeEvent, useCallback} from 'react';
import {
    Link
} from "react-router-dom";
import Page from "./Page";
import {StepProps} from "./App";


const Step1: FunctionComponent<StepProps> = (props) => {
    const {formContent, formElemChange} = props;

    return (
        <Page title={"Step1"}>
            <div className="input-item">
                <label>Name</label>
                <input type='text' value={formContent.name} placeholder="Input Your Name here..." onChange={(e) => formElemChange(e, 'name')}/>
            </div>
            <div className="input-item">
                <label>Email</label>
                <input type="email" value={formContent.email} placeholder="Input Your email here..." onChange={(e) => formElemChange(e, 'email')}/>
            </div>
            <div className="input-item">
                <Link to="/step/2">
                    <button style={{float: 'right'}}>Next Step</button>
                </Link>
            </div>
        </Page>
    );
};

export default Step1;
