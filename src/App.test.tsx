import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the hero heading', () => {
    render(<App />);
    expect(screen.getByText(/coaching institute dashboard/i)).toBeInTheDocument();
  });
});
