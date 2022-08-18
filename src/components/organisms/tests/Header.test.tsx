import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from '../Header';

test('input "Hide on bush" in Search Input', async () => {
  render(<Header />);
  const searchInput = screen.getByPlaceholderText('소환사명,챔피언…');
  await userEvent.type(searchInput, 'Hide on bush');
  expect(searchInput).toHaveDisplayValue('Hide on bush');
});
