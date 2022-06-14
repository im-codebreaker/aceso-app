import * as React from 'react';
import { Button, Icon } from 'components/ui';
import './Settings.scss';

function SettingsAccountDelete() {
  return (
    <div className='section_settings-delete'>
      <h2 className='settings_title'>
        <Icon name='error-warning' />
        Suppression du compte
      </h2>
      <div className='settings_delete-message'>
        <p>
          Une fois que vous avez supprimé votre compte Aceso, vous ne pouvez
          plus revenir en arrière. S'il vous plaît, soyez sûr avant de
          supprimer.
        </p>
      </div>
      <Button
        type='button'
        onClick={() => alert('Aceso est en cours de développement.')}
      >
        Supprimer mon compte
      </Button>
    </div>
  );
}

export { SettingsAccountDelete };
