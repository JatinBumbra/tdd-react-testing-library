import { render, screen, fireEvent } from '@testing-library/react';
import Todo from './Todo';
import { BrowserRouter } from 'react-router-dom';

const MockTodo = () => (
  <BrowserRouter>
    <Todo />
  </BrowserRouter>
);

const addTodo = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
  const buttonElement = screen.getByRole('button', { name: /Add/i });
  tasks.forEach((task) => {
    fireEvent.change(inputElement, { target: { value: task } });
    fireEvent.click(buttonElement);
  });
};

describe('Component Todo', () => {
  beforeEach(() => {
    render(<MockTodo />);
  });

  it('should add the todo to the list', () => {
    addTodo(['Go shopping']);
    const divElement = screen.getByText(/go shopping/i);
    expect(divElement).toBeInTheDocument();
  });

  it('should add multiple todos to the list', () => {
    addTodo(['Go shopping', 'Clean room', 'Play guitar']);
    const divElements = screen.getAllByTestId('todo-task');
    expect(divElements.length).toBe(3);
  });

  it('task should not have `completed` class when initially rendered', () => {
    addTodo(['Go shopping']);
    const divElement = screen.getByText(/go shopping/i);
    expect(divElement).not.toHaveClass('todo-item-active');
  });

  it('task should have `completed` class when the todo is clicked', () => {
    addTodo(['Go shopping']);
    const divElement = screen.getByText(/go shopping/i);
    fireEvent.click(divElement);
    expect(divElement).toHaveClass('todo-item-active');
  });
});
