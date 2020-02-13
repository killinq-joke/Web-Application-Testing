import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('renders strikes:', () => {
  const wrapper = render(<App />)
  // wrapper.debug()
  const buttonStrike = wrapper.queryByRole(/strikes:/i)
  expect(buttonStrike).toBeInTheDocument()
});

describe('renders balls:', () => {
  const wrapper = render(<App />)
  it('can increment the count by clicking on the increment', () => {
    
    let elementWithZero = wrapper.queryByText(/0/);
    expect(elementWithZero).toBeInTheDocument();

    const ballButton = wrapper.queryByTestId('ballButton');
    
    elementWithZero = wrapper.queryByText(/0/);
    const elementWithTwo = wrapper.queryByText(/1/);
    fireEvent.click(ballButton);
    expect(elementWithZero).not.toBeInTheDocument();
    
    expect(elementWithTwo).toBeInTheDocument();
    wrapper.debug()
  });

})
  


describe('test', () => {
  it('returns 5', () => {
    expect(5).toBe(5)
  })
})
