import { useState } from 'react';

type AvatarProps = {
  url?: string;
  alt?: string;
};

export const FALLBACK_AVATAR_URL =
  'https://avatars.githubusercontent.com/u/1883622?v=4';
export const FALLBACK_AVATAR_ALT_TEXT = 'Avatar image';

const Avatar = ({
  url = FALLBACK_AVATAR_URL,
  alt = FALLBACK_AVATAR_ALT_TEXT,
}: AvatarProps) => {
  const [srcToRender, setSrcToRender] = useState(url);

  return (
    <img
      src={srcToRender}
      alt={alt}
      onError={() => setSrcToRender(FALLBACK_AVATAR_URL)}
    />
  );
};

export default Avatar;
