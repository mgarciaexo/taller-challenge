
import { render, screen } from '@testing-library/react';
import {App} from './App';


it("should not show any error message when the component is loaded", () => {
  render(<App />);
  const alertElement = screen.getAllByText("this is my hidden div");
  expect(alertElement).toBeInTheDocument();
});
