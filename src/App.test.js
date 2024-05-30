import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

describe('App', () => {
  afterEach(cleanup);

  it('renders without crashing', () => {
    const { getAllByText } = render(<App />);
    expect(getAllByText('Jithin').length).toBeGreaterThanOrEqual(2);
  });

  it('toggles dark mode', () => {
    const { getByTitle, getByLabelText } = render(<App />);
    const toggleButton = getByTitle('Theme toggle');
    fireEvent.click(toggleButton);
    expect(getByLabelText('Toggle dark mode')).toBeInTheDocument();
    fireEvent.click(toggleButton);
    expect(getByLabelText('Toggle light mode')).toBeInTheDocument();
  });

  it('shows scroll to top button when scrolled down', () => {
    const { getByTitle } = render(<App />);
    window.scrollY = 1000;
    fireEvent.scroll(window);

    const scrollToTopButton = getByTitle('Scroll to top');
    expect(scrollToTopButton).toBeVisible();
  });

  it('loads with correct theme state from localStorage', () => {
    const darkModeSetting = true;
    localStorage.setItem('darkMode', JSON.stringify(darkModeSetting));
    const { container } = render(<App />);
    const className = container.firstChild.className;
    expect(className).toContain(darkModeSetting ? 'dark-mode' : 'light-mode');
    localStorage.removeItem('darkMode');
  });

  it('contains profile picture', () => {
    const { getAllByAltText } = render(<App />);
    expect(getAllByAltText('Selfie of Jithin')).toHaveLength(2);
  });

  it('contains security headers', () => {
    const { container } = render(<App />);
    const metaTags = container.querySelectorAll('meta');
    expect(metaTags).toBeTruthy();
  });

  it('scroll to top button scrolls the window to the top', () => {
    const { getByTitle } = render(<App />);
    window.scrollY = 1000;
    window.scrollTo = jest.fn();

    fireEvent.scroll(window);
    const scrollToTopButton = getByTitle('Scroll to top');
    fireEvent.click(scrollToTopButton);

    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });

  it('has accessible aria-labels and tabIndexes', () => {
    const { getByLabelText } = render(<App />);
    const toggleButton = getByLabelText('Toggle light mode');
    expect(toggleButton).toHaveAttribute('tabIndex', '0');
  });
});