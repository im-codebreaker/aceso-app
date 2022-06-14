import * as React from 'react';
import './Table.scss';

function Table({ children }) {
  return <table className='table'>{children}</table>;
}

export { Table };
