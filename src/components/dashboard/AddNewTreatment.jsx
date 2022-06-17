import * as React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import {
  Button,
  Form,
  FormGroup,
  Icon,
  Input,
  FormTitle,
  Label,
} from 'components/ui';

function AddNewTreatment({ setIsOpen }) {
  const methods = useForm();

  function submitNewTreatment({
    drugName,
    morning,
    noon,
    evening,
    treatmentStart,
    treatmentEnd,
  }) {
    console.log({
      drugName,
      frequency: [Number(morning), Number(noon), Number(evening)],
      treatmentStart,
      treatmentEnd,
    });
    setTimeout(() => {
      setIsOpen(false);
    }, 2000);
  }
  return (
    <FormProvider {...methods}>
      <Form
        type='add-treatment'
        className='wrapper_elevation'
        onSubmit={methods.handleSubmit(submitNewTreatment)}
      >
        <FormTitle>
          <Icon name='medicine-bottle' />
          Ajouter un traitement
        </FormTitle>
        <FormGroup>
          <Label>Nom du médicament</Label>
          <Input name='drugName' placeholder='ELIQUIS 5mg' />
        </FormGroup>
        <div className='group-row'>
          <FormGroup>
            <Label>Matin</Label>
            <Input type='number' name='morning' placeholder='1' step='0.5' />
          </FormGroup>
          <FormGroup>
            <Label>Midi</Label>
            <Input type='number' name='noon' placeholder='0' step='0.5' />
          </FormGroup>
          <FormGroup>
            <Label>Soir</Label>
            <Input type='number' name='evening' placeholder='1' step='0.5' />
          </FormGroup>
        </div>
        <div className='group-row'>
          <FormGroup>
            <Label>Date de début</Label>
            <Input type='date' name='treatmentStart' placeholder='1' />
          </FormGroup>
          <FormGroup>
            <Label>Date de fin</Label>
            <Input type='date' name='treatmentEnd' placeholder='0' />
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

export { AddNewTreatment };
