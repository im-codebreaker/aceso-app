import * as React from 'react';
import { Button, Icon, FormTitle } from 'components/ui';

function SettingsAccountDelete() {
  return (
    <div className='section_settings-delete'>
      <FormTitle>
        <Icon name='error-warning' />
        Suppression du compte
      </FormTitle>
      <div className='settings_delete-message'>
        <p>
          Une fois que vous avez supprimé votre compte Aceso, vous ne pouvez
          plus revenir en arrière. S'il vous plaît, soyez sûr avant de
          supprimer.
        </p>
      </div>
      <Button
        type='button'
        color='danger'
        onClick={() => alert('Aceso est en cours de développement.')}
      >
        Supprimer mon compte
      </Button>
    </div>
  );
}

export { SettingsAccountDelete };
