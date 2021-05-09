import React from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import App  from "../Components/App";
import Page  from "../Components/Page";
import Card  from "../Components/Card";
import Step1  from "../Components/Step1";
import Step2 from "../Components/Step2";
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import {StepProps} from "../Components/Interfaces";



describe("<App />", () => {
  test('Component App should be rendered', () => {
    render(<App />)
  })
});

describe("<Page />", () => {
  test('Component App should be rendered', () => {
    render(<Page />)
  })
});

describe("<Card />", () => {
  const ComponentWithTitle = {
    title: "Title",
    children: "<div>Children</div>"
  }

  test('Component Card will not have title and children', () => {
    render(<Card />)
  })

  test('Component Card should be rendered with title and html from children', () => {
    render(<Card {...ComponentWithTitle}/>)
  })
});

describe("<Step1 />", () => {
  const formElemChange = jest.fn();
  const settings:StepProps = {
    formContent: {
      name: 'Tanya',
      email: 'effel@tut.by',
      gender: 'Female',
      isAdult: false
    },
    formElemChange
  };
  test('Component Step1 should be rendered', () => {
    const Step1Component = render(<Router><Step1 {...settings}/></Router>);
    const nameInput = Step1Component.getByLabelText('inputName') as HTMLInputElement;
    const emailInput = Step1Component.getByLabelText('inputEmail') as HTMLInputElement;

    fireEvent.change(nameInput, { target: { value: 'Tanya' } });
    expect(nameInput.value).toBe('Tanya');

    fireEvent.change(emailInput, { target: { value: 'effel@tut.by' } });
    expect(emailInput.value).toBe('effel@tut.by');
  })
});

describe("<Step2 />", () => {
  const formElemChange = jest.fn();
  const setFormContent = jest.fn();

  const settings:StepProps = {
    formContent: {
      name: 'Tanya',
      email: 'effel@tut.by',
      gender: 'Female',
      isAdult: false
    },
    formElemChange,
    setFormContent
  };
  test('Component Step2 should be rendered', () => {
    const Step2Component = render(<Router><Step2 {...settings}/></Router>);
    const gender = Step2Component.getByLabelText('gender') as HTMLSelectElement;
    const ageCheck = Step2Component.getByLabelText('age') as HTMLInputElement;

    fireEvent.change(gender, { target: { value: 'Female' } });
    expect(gender.value).toBe('Female');

    fireEvent.change(ageCheck, { target: { checked: true } });
    expect(ageCheck.checked).toBe(true);
  })
});


