import { afterEach, describe, expect, it } from 'vitest';
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';

import DismissableBlurb from './DismissableBlurb';

describe('DismissableBlurb', () => {
  afterEach(() => {
    cleanup();
  });
  it('should render with the title', () => {
    render(
      <DismissableBlurb>
        <h1>Welcome to the new feed!</h1>
        <p>W're updating this to make it more interactive and useful</p>
      </DismissableBlurb>
    );
    expect(screen.getByText(/Welcome to the new feed/i)).toBeInTheDocument();
  });

  it('should render with close button', () => {
    render(
      <DismissableBlurb>
        <h1>Welcome to the new feed!</h1>
      </DismissableBlurb>
    );
    const closeButton = screen.getByRole('button', { name: /x/i });
    expect(closeButton).toBeInTheDocument();
  });

  it('should dismiss the component when user click the close button', async () => {
    render(
      <DismissableBlurb>
        <h1>Welcome to the new feed!</h1>
      </DismissableBlurb>
    );
    const closeButton = screen.getByRole('button', { name: /x/i });
    fireEvent.click(closeButton);
    await waitFor(() => {
      expect(
        screen.queryByText(/Welcome to the new feed/i)
      ).not.toBeInTheDocument();
    });
  });
});
