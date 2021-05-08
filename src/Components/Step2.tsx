import React, {ChangeEvent, FunctionComponent, useCallback, useEffect} from "react";
import Page from "./Page";
import {Link} from "react-router-dom";
import {StepProps} from "./App";


const Step2: FunctionComponent<StepProps> = (props) => {
    const {formContent, formElemChange, setFormContent} = props;

    useEffect(() => {

    }, []);

    const checkOnChange = useCallback((e) => {
        const obj = {
            ...formContent,
            isAdult: !e.target.value
        };
        setFormContent(obj);
    }, []);

    const sendToServer = () => {
      
    }

    return (
        <Page title={'Step2'}>
            <div className="input-item">
                <label>Gender</label>
                <select value={formContent.gender} onChange={(e) => formElemChange(e, 'gender')}>
                    <option>Male</option>
                    <option>Female</option>
                </select>
            </div>
            <div className="input-item">
                <label>Already have 18 years old?</label>
                <input type="checkbox"
                       defaultChecked={!!formContent.isAdult}
                       onChange={(e) => checkOnChange(e)}/>
            </div>
            <Link to="/">
                <button>Back</button>
            </Link>
            <button onClick={sendToServer}>Submit</button>
        </Page>
    );
};

export default Step2;
