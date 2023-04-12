import { PropsWithChildren, useState } from 'react';

type DismissableBlurbProps = PropsWithChildren<{}>;

const DismissableBlurb = ({ children }: DismissableBlurbProps) => {
  const [display, setDisplay] = useState(true);
  return display ? (
    <div style={{ display: `${display ? 'block' : 'none'}` }}>
      <div role="button" onClick={() => setDisplay(false)}>
        x
      </div>
      {children}
    </div>
  ) : null;
};

export default DismissableBlurb;
