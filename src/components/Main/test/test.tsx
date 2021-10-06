import { render, screen } from '@testing-library/react';

import { Main } from '..';

describe('Component | Main', () => {
  it('should render the Main', () => {
    render(<Main />);

    expect(screen.getByRole('heading', { name: /Main/i })).toBeInTheDocument();
  });
});
