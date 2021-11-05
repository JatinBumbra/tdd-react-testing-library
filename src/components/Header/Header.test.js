import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Component Header', () => {
  it('renders a h1 element for the title', () => {
    render(<Header />);
    const headingElement = screen.getByRole('heading');
    expect(headingElement).toBeInTheDocument();
  });

  it('renders the title passed as prop', async () => {
    render(<Header title='My Header' />);
    const headingElement = screen.getByText(/my header/i);
    expect(headingElement).toBeInTheDocument();
  });
});
