import * as React from 'react';
import { Button, Form, FormGroup, Icon, Input, Label } from 'components/ui';
import './Settings.scss';

function SettingsPersonnalInformation({ handleSubmit }) {
  function onSubmit({ lastName, firstName, email, phone, address, zup, city }) {
    console.log(lastName, firstName, email, phone, address, zup, city);
  }

  return (
    <div className='section_settings-infos'>
      <h2 className='settings_title'>
        <Icon name='user' />
        My personal information
      </h2>
      <Form type='update-infos' onSubmit={handleSubmit(onSubmit)}>
        <div className='group-row'>
          <FormGroup>
            <Label>Last name</Label>
            <Input name='lastName' placeholder='Doe' />
          </FormGroup>
          <FormGroup>
            <Label>First name</Label>
            <Input name='firstName' placeholder='Doe' />
          </FormGroup>
        </div>
        <div className='group-row'>
          <FormGroup>
            <Label>Email</Label>
            <Input name='email' placeholder='john.doe@mail.com' />
          </FormGroup>
          <FormGroup>
            <Label>Phone</Label>
            <Input name='phone' placeholder='06.68.54.56.21' />
          </FormGroup>
        </div>
        <FormGroup>
          <Label>Address</Label>
          <Input name='address' placeholder='21 Doctor Street' />
        </FormGroup>
        <FormGroup>
          <Label>Zup</Label>
          <Input name='zup' placeholder='19103' />
        </FormGroup>
        <FormGroup>
          <Label>City</Label>
          <Input name='city' placeholder='Philadelphia' />
        </FormGroup>
        <Button type='submit'>Update</Button>
      </Form>
    </div>
  );
}

export { SettingsPersonnalInformation };
