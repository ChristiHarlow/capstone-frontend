// Import necessary libraries
import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

// Define the test case
test('renders Christi\'s Favorite Things header', () => {
  // Render the App component
  render(<App />);

  // Find an element with the text "Christi's Favorite Things"
  const linkElement = screen.getByText(/christi's favorite things/i);

  // Check if the element is in the document
  expect(linkElement).toBeInTheDocument();
});

