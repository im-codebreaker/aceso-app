import * as React from 'react';
import { Button, Form, FormGroup, Icon, Input, Label } from 'components/ui';
import './Settings.scss';

function SettingsManagePassword({ handleSubmit }) {
  function onSubmit({ password, passwordConfirmation }) {
    console.log(password, passwordConfirmation);
  }
  return (
    <div className='section_settings-password'>
      <h2 className='settings_title'>
        <Icon name='lock-password' />
        Gestion des mots de passe
      </h2>
      <Form type='update-password' onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label>Nouveau mot de passe</Label>
          <Input name='password' placeholder='**********' />
        </FormGroup>
        <FormGroup>
          <Label>Confirmer nouveau mot de passe</Label>
          <Input name='passwordConfirmation' placeholder='**********' />
        </FormGroup>
        <Button type='submit'>Enregistrer</Button>
      </Form>
    </div>
  );
}

export { SettingsManagePassword };
