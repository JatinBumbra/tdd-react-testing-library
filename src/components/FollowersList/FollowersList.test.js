import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FollowersList from './FollowersList';

const MockFollowersList = () => (
  <BrowserRouter>
    <FollowersList />
  </BrowserRouter>
);

const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: 'Jatin',
          last: 'Bumbra',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/men/39.jpg',
        },
        login: {
          username: 'jatinbumbra',
        },
      },
    ],
  },
};

describe('Component FollowersList', () => {
  beforeEach(() => {
    jest.mock('axios', () => ({
      get: () => mockResponse,
    }));
  });

  it('renders the follower item', async () => {
    render(<MockFollowersList />);
    const followerElement = await screen.findByTestId(/follower-item-0/i);
    expect(followerElement).toBeInTheDocument();
  });

  it('renders multiple followers', async () => {
    render(<MockFollowersList />);
    const followerElement = await screen.findAllByTestId(/follower-item/i);
    expect(followerElement.length).toBeGreaterThan(0);
  });
});
