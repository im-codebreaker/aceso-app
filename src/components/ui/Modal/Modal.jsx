import * as React from 'react';
import ReactDOM from 'react-dom';
import './Modal.scss';

function Modal({ id, children }) {
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return ReactDOM.createPortal(
    <div className='modal'>{children}</div>,
    document.getElementById(`${id}`)
  );
}

export { Modal };
