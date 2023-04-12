import { PropsWithChildren, useState } from 'react';

type DismissableBlurbProps = PropsWithChildren<{}>;

const DismissableBlurb = ({ children }: DismissableBlurbProps) => {
  const [display, setDisplay] = useState(true);
  return display ? (
    <div
      className="relative  flex items-center w-full max-w-md p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
      role="alert"
      style={{ display: `${display ? 'block' : 'none'}` }}
    >
      <button
        role="button"
        className="absolute right-2 top-2 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        aria-label="Close"
        onClick={() => setDisplay(false)}
      >
        <span className="sr-only">x</span>
        <svg
          aria-hidden="true"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <div className="ml-3 text-sm font-normal">{children}</div>
    </div>
  ) : null;
};

export default DismissableBlurb;
