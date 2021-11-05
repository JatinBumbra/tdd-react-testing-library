import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TodoFooter from './TodoFooter';

const MockTodoFooter = ({ numberOfIncompleteTasks }) => (
  <BrowserRouter>
    <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
  </BrowserRouter>
);

describe('Component TodoFooter', () => {
  it('should render the correct number of incomplete tasks', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={5} />);
    const reqElement = screen.getByText(/5 tasks left/i);
    expect(reqElement).toBeInTheDocument();
  });

  it('should render "task" when the number of incomplete tasks is 1', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const reqElement = screen.getByText(/1 task left/i);
    expect(reqElement).toBeInTheDocument();
  });
});
