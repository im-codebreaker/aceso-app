import * as React from 'react';
import {
  Alert,
  Button,
  Form,
  FormHeading,
  FormGroup,
  Input,
  Label,
} from 'components/ui';
import { useForm, FormProvider } from 'react-hook-form';
import { useAuth } from 'context/Auth';
import { useNavigate } from 'react-router-dom';

function RequestPasswordForm() {
  const [hasError, setHasError] = React.useState(null);

  const methods = useForm();
  const { resetPassword } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async ({ email }) => {
    const { error } = await resetPassword(email);
    if (error) setHasError(error.message);

    setTimeout(() => navigate('confirmation'));
  };
  return (
    <main className='container'>
      <FormProvider {...methods}>
        <Form type='reset' onSubmit={methods.handleSubmit(onSubmit)}>
          <FormHeading>
            <h2>Réinitialiser votre mot de passe</h2>
            <p>
              Entrez l'adresse mail associée à votre compte Aceso pour demander
              un lien de réinitialisation de votre mot de passe.
            </p>
          </FormHeading>
          <FormGroup>
            <Label>Email</Label>
            <Input
              name='email'
              placeholder="Entrez l'adresse mail associée à votre compte Aceso"
            />
            {hasError && (
              <Alert
                message="L'adresse mail soumise n'est liée à aucun compte Aceso"
                ghost
                severity='error'
              />
            )}
          </FormGroup>
          <Button type='submit'>Demander un lien</Button>
        </Form>
      </FormProvider>
    </main>
  );
}

export { RequestPasswordForm };
