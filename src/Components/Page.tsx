import React, { FunctionComponent } from 'react';
import './Page.scss'
import Card from "./Card";
import {ComponentWithTitle} from "./App";


const Page: FunctionComponent<ComponentWithTitle> = ({title,children}) => {

    return (
        <div className="container">
            <h1>Wizard Form</h1>
            <div className="wizard-form-content">
                <form>
                    <Card title={title}>{children}</Card>
                </form>
            </div>
        </div>
    );
};

export default Page;
