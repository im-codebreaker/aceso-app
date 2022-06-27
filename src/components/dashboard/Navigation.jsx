import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'context/Auth';
import { Button, Icon } from 'components/ui';
import './Navigation.scss';

function Navigation() {
  const { signOut } = useAuth();
  return (
    <header className='header'>
      <svg
        className='logo'
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
      >
        <circle cx='12' cy='12' r='12' />
      </svg>
      <nav className='header_navbar'>
        <ul className='navbar_links'>
          <li>
            <NavLink to='overview'>
              <Icon name='dashboard' aria-label='Tableau de bord' />
              <span className='visible-hidden'>Tableau de bord</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='patient-list'>
              <Icon name='survey' />
              <span className='visible-hidden'>Liste des patients</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='care-list'>
              <Icon name='capsule' />
              <span className='visible-hidden'>Liste des soins</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='organization'>
              <Icon name='hospital' />
              <span className='visible-hidden'>Mon cabinet infirmier</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='settings'>
              <Icon name='settings-3' />
              <span className='visible-hidden'>Paramètres</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <Button
        className='logout'
        variant='ghost'
        onClick={async () => await signOut()}
      >
        <Icon name='logout-box' />
        <span className='visible-hidden'>Logout</span>
      </Button>
    </header>
  );
}

export { Navigation };
