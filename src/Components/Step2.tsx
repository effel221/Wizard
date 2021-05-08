import React, {useEffect} from "react";
import Page from "./Page";
import {Link} from "react-router-dom";


const Step2 = () => {

    useEffect(() => {

    }, []);

    return (
        <Page title={'Step2'}>
            <div className="input-item">
                <label>Gender</label>
                <select>
                    <option>Male</option>
                    <option>Female</option>
                </select>
            </div>
            <div className="input-item">
                <label>Already 18 years old</label>
                <input type="checkbox" />
            </div>
            <button><Link to="/">Back</Link></button>
            <button>Submit</button>
        </Page>
    );
};

export default Step2;
