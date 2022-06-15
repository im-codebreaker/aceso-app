import * as React from 'react';
import {
  Button,
  Icon,
  Form,
  FormGroup,
  FormTitle,
  Label,
  Radio,
} from 'components/ui';

function SettingsManageTheme({ handleSubmit }) {
  function onSubmit({ theme }) {
    if (document.documentElement.dataset.theme === theme) {
      return;
    }
    document.documentElement.dataset.theme = theme;
  }

  return (
    <div className='section_settings-theme'>
      <FormTitle>
        <Icon name='palette' />
        Gestion des thèmes
      </FormTitle>
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
            <Label>Clair</Label>{' '}
          </div>
          <div className='settings_controls'>
            {' '}
            <Radio type='radio' id='dark' name='theme' value='dark' />
            <Label>Sombre</Label>{' '}
          </div>
        </FormGroup>
        <Button type='submit'>Enregistrer</Button>
      </Form>
    </div>
  );
}

export { SettingsManageTheme };
