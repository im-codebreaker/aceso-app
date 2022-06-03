import * as React from 'react';
import { Button, Form, FormGroup, Icon, Input, Label } from 'components/ui';
import './Settings.scss';

function SettingsPasswordUpdate({handleSubmit}) {
 
  function onSubmit({password, passwordConfirmation}) {
    console.log(password, passwordConfirmation);
  }
  return (
    <div className='section_settings-password'>
      <h2 className='settings_title'>
        <Icon name='lock-password' />
        Password Management
      </h2>
        <Form
          type='update-password'
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormGroup>
            <Label>New password</Label>
            <Input name='password' placeholder='**********' />
          </FormGroup>
          <FormGroup>
            <Label>Confirm new password</Label>
            <Input name='passwordConfirmation' placeholder='**********' />
          </FormGroup>
          <Button type='submit'>Update</Button>
        </Form>
    </div>
  );
}

export { SettingsPasswordUpdate };
