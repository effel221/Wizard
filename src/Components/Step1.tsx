import React, {useEffect} from "react";
import {
    Link
} from "react-router-dom";
import Page from "./Page";


const Step1 = () => {

    useEffect(() => {

    }, []);

    return (
       <Page title={"Step1"}>
           <div className="input-item">
               <label>Name</label>
               <input type='text' placeholder="Input Your Name here..."/>
           </div>
           <div className="input-item">
               <label>Email</label>
               <input type="email" placeholder="Input Your email here..."/>
           </div>
           <div className="input-item">
               <Link to="/step/2"><button style={{float: 'right'}}>Next Step</button></Link>
           </div>
       </Page>
    );
};

export default Step1;
