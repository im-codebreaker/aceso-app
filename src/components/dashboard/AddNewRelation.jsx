import * as React from 'react';
import { usePatient } from 'context/Patient';
import { useForm, FormProvider } from 'react-hook-form';
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

function AddNewRelation({ patient, setIsOpen }) {
  const methods = useForm();
  const [, setPatientList] = usePatient();
  function submitNewRelation({
    relationType,
    firstName,
    lastName,
    relation,
    phone,
    address,
    mail,
  }) {
    const updatedPatient = { ...patient };

    updatedPatient[relationType] = [
      ...patient[relationType],
      {
        id: Date.now(),
        firstName,
        lastName,
        relation,
        contact: { phone, address, mail },
      },
    ];

    setPatientList((prevState) => {
      return prevState.map((obj) => {
        if (obj.id === patient.id) {
          obj = updatedPatient;
        }
        return obj;
      });
    });

    setTimeout(() => {
      setIsOpen(false);
    }, 2000);
  }
  return (
    <FormProvider {...methods}>
      <Form
        type='add-relation'
        className='wrapper_elevation'
        onSubmit={methods.handleSubmit(submitNewRelation)}
      >
        <FormTitle>
          <Icon name='user' />
          Ajouter une personne
        </FormTitle>
        <FormGroup>
          <Label>Type</Label>
          <div className='status_controls'>
            <Radio
              id='family'
              name='relationType'
              value='family'
              defaultChecked
            />
            <Label>Entourage</Label>{' '}
          </div>
          <div className='status_controls'>
            {' '}
            <Radio id='staff' name='relationType' value='staff' />
            <Label>Intervenant</Label>{' '}
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
          <FormGroup>
            <Label>Lien / Fonction</Label>
            <Input name='relation' placeholder='Frère' />
          </FormGroup>
        </div>
        <div className='group-row'>
          <FormGroup>
            <Label>Téléphone</Label>
            <Input name='phone' placeholder='06.32.32.32.32' />
          </FormGroup>
          <FormGroup>
            <Label>Adresse</Label>
            <Input
              name='address'
              placeholder='21 rue du Docteur Girbal, 13010, Marseille'
            />
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input name='mail' placeholder='john.doe@gmail.fr' />
          </FormGroup>
        </div>
        <div className='button-group'>
          <Button variant='outlined' onClick={() => setIsOpen(false)}>
            Retour
          </Button>
          <Button type='submit'>Ajouter</Button>
        </div>
      </Form>
    </FormProvider>
  );
}

export { AddNewRelation };
