import * as React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Form,
  FormGroup,
  Icon,
  Input,
  FormTitle,
  Radio,
  Label,
} from 'components/ui';
import './AddNewPatient.scss';

function AddNewPatient() {
  const methods = useForm();
  const navigate = useNavigate();

  function submitNewPatient(data) {
    console.log({ ...data, history: [], family: [], staff: [] });
  }

  return (
    <main className='container'>
      <h1>Ajouter un patient</h1>
      <FormProvider {...methods}>
        <Form
          type='add-patient'
          onSubmit={methods.handleSubmit(submitNewPatient)}
        >
          <div className='patient_status'>
            <FormTitle>
              <Icon name='user' />
              État Civil
            </FormTitle>
            <FormGroup className='patient_status-gender'>
              <Label>Sexe</Label>
              <div className='status_controls'>
                {' '}
                <Radio id='men' name='gender' value='men' defaultChecked />
                <Label>Masculin</Label>{' '}
              </div>
              <div className='status_controls'>
                {' '}
                <Radio id='women' name='gender' value='women' />
                <Label>Féminin</Label>{' '}
              </div>
            </FormGroup>
            <div className='group-row'>
              <FormGroup>
                <Label>Nom de famille</Label>
                <Input name='lastName' placeholder='Doe' />
              </FormGroup>
              <FormGroup>
                <Label>Prénom</Label>
                <Input name='firstName' placeholder='John' />
              </FormGroup>
            </div>
            <div className='group-row'>
              <FormGroup>
                <Label>Date de naissance</Label>
                <Input
                  name='birthday'
                  placeholder='12/07/1957'
                  pattern='^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$'
                />
              </FormGroup>
              <FormGroup>
                <Label>Lieu de naissance</Label>
                <Input name='birthPlace' placeholder='Marseille' />
              </FormGroup>
            </div>
            <FormGroup>
              <Label>Nom de jeune fille *</Label>
              <Input name='maidenName' placeholder='' />
            </FormGroup>
            <div className='group-row'>
              <FormGroup>
                <Label>Situation de vie</Label>
                <Input name='relationStatus' placeholder='Marié' />
              </FormGroup>
              <FormGroup>
                <Label>Environnement de vie</Label>
                <Input
                  name='environment'
                  placeholder='Hébergement individuel'
                />
              </FormGroup>
            </div>
            <FormGroup className='patient_status-alarm'>
              <Label>Téléalarme</Label>
              <div className='status_controls'>
                {' '}
                <Radio id='yes' name='alarm' value='yes' defaultChecked />
                <Label>Oui</Label>{' '}
              </div>
              <div className='status_controls'>
                {' '}
                <Radio id='no' name='alarm' value='no' />
                <Label>Non</Label>{' '}
              </div>
            </FormGroup>
          </div>
          <div className='patient_contact'>
            <FormTitle>
              <Icon name='contacts-book' />
              Coordonnées
            </FormTitle>
            <FormGroup>
              <Label>Adresse</Label>
              <Input name='address' placeholder='21 rue du Docteur Girbal' />
            </FormGroup>
            <div className='group-row'>
              <FormGroup>
                <Label>Code Postal</Label>
                <Input name='zip' placeholder='13010' />
              </FormGroup>
              <FormGroup>
                <Label>Ville</Label>
                <Input name='city' placeholder='Marseille' />
              </FormGroup>
            </div>
            <div className='group-row'>
              <FormGroup>
                <Label>Portable</Label>
                <Input name='mobile' placeholder='06.01.02.06.04' />
              </FormGroup>
              <FormGroup>
                <Label>Fixe</Label>
                <Input name='phone' placeholder='04.91.23.32.23' />
              </FormGroup>
            </div>
          </div>
          <div className='patient_administrative'>
            <FormTitle>
              <Icon name='file' />
              Situation Administrative
            </FormTitle>
            <div className='group-row'>
              <FormGroup>
                <Label>Numéro de Sécurité Sociale</Label>
                <Input name='ssn' placeholder='1301023456789' />
              </FormGroup>
              <FormGroup>
                <Label>Médecin traitant</Label>
                <Input name='doctor' placeholder='Jane Doe' />
              </FormGroup>
            </div>
            <div className='group-row'>
              <FormGroup>
                <Label>Caisse</Label>
                <Input name='ssnCity' placeholder='Marseille' />
              </FormGroup>
              <FormGroup>
                <Label>Mutuelle</Label>
                <Input name='insurance' placeholder='La Mutuelle' />
              </FormGroup>
            </div>
          </div>
          <div className='button-group'>
            <Button
              variant='outlined'
              onClick={() => navigate('../patient-list')}
            >
              Retour
            </Button>
            <Button type='submit'>Créer patient</Button>
          </div>
        </Form>
      </FormProvider>
    </main>
  );
}

export { AddNewPatient };
