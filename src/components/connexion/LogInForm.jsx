import * as React from 'react';
import {
  Button,
  Form,
  FormHeading,
  FormGroup,
  FormFooter,
  Label,
  Input,
} from 'components/ui';
import { useAuth } from 'context/Auth';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import './LogInForm.scss';

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

function LogInForm() {
  const [hasError, setHasError] = React.useState(null);
  const methods = useForm({ resolver: yupResolver(schema) });

  const { signIn } = useAuth();

  const navigate = useNavigate();

  const onSubmit = async ({ email, password }) => {
    const { error } = await signIn({ email, password });

    if (error) {
      setHasError(error.message);
      setTimeout(() => {
        setHasError(null);
      }, 5000);
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <main className='container'>
      <FormProvider {...methods}>
        <Form type='login' onSubmit={methods.handleSubmit(onSubmit)}>
          <FormHeading>
            <h2>Se connecter à Aceso</h2>
            <p>Connectez-vous à votre compte Aceso avec votre adresse mail.</p>
            {hasError && (
              <div>
                {hasError} - L'email et le mot de passe semble ne pas
                correspondre, veuillez vérifier que ce compte Aceso existe.
              </div>
            )}
          </FormHeading>
          <FormGroup>
            <Label>Email</Label>
            <Input name='email' type='email' placeholder='john.doe@gmail.fr' />
          </FormGroup>
          <FormGroup>
            <Label>Mot de passe</Label>
            <Input
              name='password'
              type='password'
              placeholder='******************'
            />
            <Link className='reset-link' to='/request-password'>
              Mot de passe oublié ?
            </Link>
          </FormGroup>
          <Button type='submit' variant='primary' fullWidth>
            Se connecter
          </Button>
          <FormFooter>
            <p>
              Vous ne disposez pas d'un compte Aceso ?{' '}
              <Link to='/register'>S'inscrire</Link>
            </p>
          </FormFooter>
        </Form>
      </FormProvider>
    </main>
  );
}

export { LogInForm };
