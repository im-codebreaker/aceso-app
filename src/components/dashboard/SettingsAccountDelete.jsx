import * as React from 'react';
import { Button, Icon } from 'components/ui';
import './Settings.scss';

function SettingsAccountDelete() {
 
  return (
    <div className='section_settings-delete'>
      <h2 className='settings_title'>
        <Icon name='error-warning' />
        Delete your account
      </h2>
      <div className='settings_delete-message'>Once you have deleted your Aceso account, you cannot go back. Please, be sure before you delete.</div>
      <Button type='button' onClick={() => alert('Aceso is still in developpement, try again later')}>Delete Account</Button>
    </div>
  );
}

export { SettingsAccountDelete };
