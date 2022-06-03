import * as React from 'react';
import { Link} from 'react-router-dom';
import { useAuth } from 'context/Auth';
import { Button, Icon } from 'components/ui';
import './Navigation.scss';


function Navigation() {
  const { signOut } = useAuth();
  return (
    <header className='header'>
        <div className='logo'>Aceso</div>
        <nav className='header_navbar'>
          <ul className='navbar_links'>
            <li>
              <Link to='/dashboard'>
                <Icon name='dashboard' />
                <span className='visible-hidden'>Overview</span>
              </Link>
            </li>
            <li>
              <Link to='patient-list'>
                <Icon name='survey' />
                <span className='visible-hidden'>Patient List</span>
              </Link>
            </li>
            <li>
              <Link to='care-list'>
                <Icon name='capsule' />
                <span className='visible-hidden'>Nursing Care List</span>
              </Link>
            </li>
            <li>
              <Link to='organization'>
                <Icon name='hospital' />
                <span className='visible-hidden'>Organization</span>
              </Link>
            </li>
            <li>
              <Link to='settings'>
                <Icon name='settings-3' />
                <span className='visible-hidden'>Settings</span>
              </Link>
            </li>
          </ul>
        </nav>
        <Button className="logout" variant='ghost' onClick={async () => await signOut()}><Icon name='logout-box'/><span className='visible-hidden'>Logout</span></Button>
      </header>)
}

export { Navigation };
