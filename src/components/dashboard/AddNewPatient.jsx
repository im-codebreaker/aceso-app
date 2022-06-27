import * as React from 'react';
import * as yup from 'yup';
import { usePatient } from 'context/Patient';
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
  Toast,
} from 'components/ui';
import { yupResolver } from '@hookform/resolvers/yup';
import './AddNewPatient.scss';

const schema = yup.object({
  gender: yup.string().required(),
  lastName: yup
    .string()
    .min(3, 'Le nom doit contenir minimum 3 caractères')
    .required('Nom de famille est un champ requis'),
  firstName: yup.string().required('Prénom est un champ requis'),
  birthday: yup
    .string()
    .matches(
      /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/,
      'Doit être au format JJ/MM/AAAA'
    )
    .required(),
  birthPlace: yup.string().required('Lieu de naissance est un champ requis'),
  maidenName: yup.string(),
  relationStatus: yup.string().required('Situation de vie est un champ requis'),
  environment: yup
    .string()
    .required('Environnement de vie est un champ requis'),
  alarm: yup.string().required(),
  address: yup.string().required('Adresse est un champ requis'),
  zip: yup
    .string()
    .matches(/^[0-9]+$/, 'Doit être uniquement des chiffres')
    .min(5, 'Doit comporter exactement 5 chiffres')
    .max(5, 'Doit comporter exactement 5 chiffres')
    .required('Code Postal est un champ requis'),
  city: yup.string().required('Ville est un champ requis'),
  mobile: yup
    .string()
    .matches(/^[0-9]+$/, 'Doit être uniquement des chiffres')
    .min(10, 'Doit comporter exactement 10 chiffres')
    .max(10, 'Doit comporter exactement 10 chiffres'),
  phone: yup
    .string()
    .matches(/^[0-9]+$/, 'Doit être uniquement des chiffres')
    .min(10, 'Doit comporter exactement 10 chiffres')
    .max(10, 'Doit comporter exactement 10 chiffres'),
  ssn: yup
    .string()
    .matches(/^[0-9]+$/, 'Doit être uniquement des chiffres')
    .min(13, 'Doit comporter exactement 13 chiffres')
    .max(13, 'Doit comporter exactement 13 chiffres'),
  ssnCity: yup.string().required('Caisse est un champ requis'),
  doctor: yup.string().required('Médecin traitant est un champ requis'),
  insurance: yup.string().required('Mutuelle est un champ requis'),
});

function AddNewPatient() {
  const methods = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const [patientList, setPatientList] = usePatient();
  const [isCreated, setIsCreated] = React.useState(null);

  function submitNewPatient(data) {
    setPatientList([
      ...patientList,
      {
        id: Date.now(),
        ...data,
        history: [],
        treatment: [],
        family: [],
        staff: [],
      },
    ]);
    setIsCreated(true);
    setTimeout(() => setIsCreated(null), 1500);
    setTimeout(() => navigate('../patient-list'), 1000);
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
                <Input name='mobile' placeholder='0601020604' />
              </FormGroup>
              <FormGroup>
                <Label>Fixe</Label>
                <Input name='phone' placeholder='0491233223' />
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

      {isCreated && (
        <Toast type='success' className={isCreated ? 'open' : 'close'}>
          Patient crée
        </Toast>
      )}
    </main>
  );
}

export { AddNewPatient };
