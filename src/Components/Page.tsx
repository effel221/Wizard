import React, { FunctionComponent } from 'react';
import './Page.scss'
import Card from "./Card";

interface PageProps {
    title: string
}

const Page: FunctionComponent<PageProps> = ({title,children}) => {
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
