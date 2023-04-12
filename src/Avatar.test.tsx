import { beforeEach, describe, expect, it } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import Avatar, {
  FALLBACK_AVATAR_ALT_TEXT,
  FALLBACK_AVATAR_URL,
} from './Avatar';

describe('Avatar', () => {
  beforeEach(() => {
    cleanup();
  });
  it('should render an img tag', () => {
    const url = 'https://avatars.githubusercontent.com/u/1883622?v=4';
    const alt = '@github-handle';
    render(<Avatar url={url} alt={alt} />);

    const img = screen.getByAltText(alt);
    expect(img).toBeInTheDocument();
    expect(img.tagName).toBe('IMG');
  });

  it('should render the url and alt passed in', () => {
    const url = 'https://avatars.githubusercontent.com/u/1883622?v=4';
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

  it('should use fallback image if image fails to load', async () => {
    render(<Avatar url="https://exampleimage.com" />);

    const img = screen.getByAltText(FALLBACK_AVATAR_ALT_TEXT);
    fireEvent.error(img);
    expect(img).toHaveAttribute('src', FALLBACK_AVATAR_URL);
  });

  it('should use a fallback image if urll is empty string', async () => {
    render(<Avatar url="" />);

    const img = screen.getByAltText(FALLBACK_AVATAR_ALT_TEXT);
    fireEvent.error(img);
    expect(img).toHaveAttribute('src', FALLBACK_AVATAR_URL);
  });
});
