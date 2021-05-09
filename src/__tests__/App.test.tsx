import React from "react";
import App  from "../Components/App";
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'


describe("<App />", () => {
  test('Component App should be rendered', () => {
    render(<App />)
  })
});
