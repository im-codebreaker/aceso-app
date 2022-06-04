import * as React from 'react';
import { Button, Icon, Form, FormGroup, Label, Radio } from 'components/ui';

function SettingsManageTheme({ handleSubmit }) {
  function onSubmit({ theme }) {
    if (document.documentElement.dataset.theme === theme) {
      return;
    }
    document.documentElement.dataset.theme = theme;
  }

  return (
    <div className='section_settings-theme'>
      <h2 className='settings_title'>
        <Icon name='palette' />
        Theme Management
      </h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup className='settings_controls-wrapper'>
          <div className='settings_controls'>
            {' '}
            <Radio
              type='radio'
              id='light'
              name='theme'
              value='light'
              defaultChecked
            />
            <Label>Light</Label>{' '}
          </div>
          <div className='settings_controls'>
            {' '}
            <Radio type='radio' id='dark' name='theme' value='dark' />
            <Label>Dark</Label>{' '}
          </div>
        </FormGroup>
        <Button type='submit'>Update</Button>
      </Form>
    </div>
  );
}

export { SettingsManageTheme };
