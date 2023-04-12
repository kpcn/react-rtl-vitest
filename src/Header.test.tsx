import { describe, expect, it } from 'vitest';
import { screen, render } from '@testing-library/react';

import Header from './Header';

describe('Header', () => {
  it('should render the header', () => {
    render(<Header headingText="React RTL Vitest" />);
    const header = screen.getByRole('heading', { name: 'React RTL Vitest' });
    expect(header).toBeInTheDocument();
  });
});
