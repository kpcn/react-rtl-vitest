import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Wrapper from './Wrapper';
import Avatar from './Avatar';

describe('Wrapper', () => {
  it('should render a image with caption', () => {
    const url = 'https://avatars.githubusercontent.com/u/1883622?v=4';
    const alt = '@github-handle';
    const captionText = 'This is a caption';
    render(
      <Wrapper caption={captionText}>
        <Avatar url={url} alt={alt} />
      </Wrapper>
    );
    const img = screen.getByAltText(alt);
    const caption = screen.getByText(captionText);
    expect(img).toBeInTheDocument();
    expect(caption).toBeInTheDocument();
  });
});
