import * as React from 'react';
import {
  Button,
  Form,
  FormGroup,
  FormTitle,
  Icon,
  Input,
  Label,
} from 'components/ui';

function SettingsManageInformation({ handleSubmit }) {
  function onSubmit({ lastName, firstName, email, phone, address, zup, city }) {
    console.log(lastName, firstName, email, phone, address, zup, city);
  }

  return (
    <div className='section_settings-infos'>
      <FormTitle>
        <Icon name='user' />
        Mes informations personnelles
      </FormTitle>
      <Form type='update-infos' onSubmit={handleSubmit(onSubmit)}>
        <div className='group-row'>
          <FormGroup>
            <Label>Nom</Label>
            <Input name='lastName' placeholder='Doe' />
          </FormGroup>
          <FormGroup>
            <Label>Prénom</Label>
            <Input name='firstName' placeholder='John' />
          </FormGroup>
        </div>
        <div className='group-row'>
          <FormGroup>
            <Label>Email</Label>
            <Input name='email' placeholder='john.doe@mail.com' />
          </FormGroup>
          <FormGroup>
            <Label>Téléphone</Label>
            <Input name='phone' placeholder='06.68.54.56.21' />
          </FormGroup>
        </div>
        <FormGroup>
          <Label>Numéro RPPS</Label>
          <Input name='address' placeholder='1234567891011' />
        </FormGroup>
        <FormGroup>
          <Label>Adresse</Label>
          <Input name='address' placeholder='21 rue du Docteur Girbal' />
        </FormGroup>
        <div className='group-row'>
          <FormGroup>
            <Label>Code Postal</Label>
            <Input name='zup' placeholder='13010' />
          </FormGroup>
          <FormGroup>
            <Label>Ville</Label>
            <Input name='city' placeholder='Marseille' />
          </FormGroup>
        </div>
        <Button type='submit' color='success'>
          Enregistrer
        </Button>
      </Form>
    </div>
  );
}

export { SettingsManageInformation };
