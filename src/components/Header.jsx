import * as React from 'react';
import './Header.scss';

function Header() {
  return (
    <header className='header'>
      <svg
        width='40'
        height='40'
        viewBox='0 0 4 4'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='2' cy='2' r='2' fill='royalblue' />
      </svg>
    </header>
  );
}

export { Header };
