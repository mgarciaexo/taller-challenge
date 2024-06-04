import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Add from './Add';

import '@testing-library/jest-dom'
// import Button from "./Button";

afterEach(() => {
  cleanup(); // Resets the DOM after each test suite
})


describe("Button Component", () => {
  const setToggle = jest.fn();
  render(<App />);
  const input = screen.getByText("task");

  // Test 1
  test("Button Rendering", () => {
      expect(input).toBeInTheDocument();
  })

  // Test 2 
  test("Button Text", () => {
      expect(input).toHaveTextContent("Click Me!");
  })
})

it("should not show any error message when the component is loaded", () => {
  render(<Add />);
  const alertElement = screen.getByRole("alert");
  expect(alertElement).not.toBeInTheDocument();
});

// it('changes the class when hovered', () => {
//   const component = renderer.create(
//     <Add></Add>,
//   );
//   let tree = component.toJSON();
//   expect(tree).toMatchSnapshot();

//   // // manually trigger the callback
//   // renderer.act(() => {
//   //   tree.props.onMouseEnter();
//   // });
//   // // re-rendering
//   // tree = component.toJSON();
//   // expect(tree).toMatchSnapshot();

//   // // manually trigger the callback
//   // renderer.act(() => {
//   //   tree.props.onMouseLeave();
//   // });
//   // // re-rendering
//   // tree = component.toJSON();
//   // expect(tree).toMatchSnapshot();
// });
describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(4);
  });
});