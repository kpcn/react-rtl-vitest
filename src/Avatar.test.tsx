import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Avatar, {
  FALLBACK_AVATAR_ALT_TEXT,
  FALLBACK_AVATAR_URL,
} from './Avatar';

describe('Avatar', () => {
  it('should render an img tag', () => {
    const url = 'https://avatars.githubusercontent.com/u/11247099?v=4';
    const alt = '@github-handle';
    render(<Avatar url={url} alt={alt} />);

    const img = screen.getByAltText(alt);
    expect(img).toBeInTheDocument();
    expect(img.tagName).toBe('IMG');
  });

  it('should render the url and alt passed in', () => {
    const url = 'https://avatars.githubusercontent.com/u/11247099?v=4';
    const alt = 'avatar image';
    render(<Avatar url={url} alt={alt} />);
    const img = screen.getByAltText(alt);
    expect(img).toHaveAttribute('src', url);
  });

  it('should use a fallback image if no URL passed in', () => {
    render(<Avatar />);
    const img = screen.getByAltText(FALLBACK_AVATAR_ALT_TEXT);
    expect(img).toHaveAttribute('src', FALLBACK_AVATAR_URL);
  });
});
