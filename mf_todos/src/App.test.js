
import { render, screen } from '@testing-library/react';
import {App} from './App';



describe("App Component", () => {
 
  // Test 1
  test("App Rendering", () => {
      render(<App />); // Rendering the App
      const text = screen.getByTestId("text");
      const button = screen.getByTestId("button");
      expect(button).toBeInTheDocument();
      expect(text).toBeInTheDocument();
  })

  // Test 2
  test("Default Text", () => {
      render(<App />);
      const text = screen.getByTestId("text");
      expect(text).toHaveTextContent("GeeksForGeeks");
  })
})
