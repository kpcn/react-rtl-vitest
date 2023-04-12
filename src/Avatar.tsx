type AvatarProps = {
  url?: string;
  alt?: string;
};

export const FALLBACK_AVATAR_URL =
  'https://avatars.githubusercontent.com/u/11247099?v=4';
export const FALLBACK_AVATAR_ALT_TEXT = 'Avatar image';

const Avatar = ({
  url = FALLBACK_AVATAR_URL,
  alt = FALLBACK_AVATAR_ALT_TEXT,
}: AvatarProps) => {
  return <img src={url} alt={alt} />;
};

export default Avatar;
