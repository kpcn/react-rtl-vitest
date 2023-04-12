import { PropsWithChildren } from 'react';

type HeaderProps = PropsWithChildren<{
  headingText?: string;
}>;

const Header = ({ children, headingText }: HeaderProps) => {
  return (
    <div className="flex flex-col items-center justify-cente">
      <h1
        role="heading"
        className="font-bold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
      >
        {headingText}
      </h1>
      {children}
    </div>
  );
};

export default Header;
