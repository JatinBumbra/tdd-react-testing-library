import { render, screen, fireEvent } from '@testing-library/react';
import AddInput from './AddInput';

const mockedSetTodos = jest.fn();

describe('Component AddInput', () => {
  it('should render input element', () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodos} />);
    const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
    expect(inputElement).toBeInTheDocument();
  });

  it('should respond to user typing', () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodos} />);
    const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
    fireEvent.change(inputElement, { target: { value: 'Go shopping' } });
    expect(inputElement.value).toBe('Go shopping');
  });

  it('should clear input when "Add" button is clicked', () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodos} />);
    const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);
    expect(inputElement.value).toBeFalsy();
  });
});
