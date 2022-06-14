import * as React from 'react';
import * as yup from 'yup';
import {
  Button,
  Form,
  FormHeading,
  FormGroup,
  FormFooter,
  Input,
  Label,
} from 'components/ui';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from 'context/Auth';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import './SignUpForm.scss';

const schema = yup.object({
  fullname: yup.string().min(3).required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});

function SignUpForm() {
  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const { signUp } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async ({ email, password }) => {
    const { error } = await signUp({ email, password });
    if (error) {
      // @info supabase seems to not throw an error on duplicate email https://github.com/supabase/supabase-js/issues/296#issuecomment-962391773
    } else {
      // @todo add modal succes created
      // @todo message confirm mail inscription
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    }
  };
  return (
    <main className='container'>
      <FormProvider {...methods}>
        <Form type='signup' onSubmit={methods.handleSubmit(onSubmit)}>
          <FormHeading>
            <h2>Créez votre compte Aceso</h2>
            <p>Rejoignez-nous et créez un compte dès maintenant.</p>
          </FormHeading>
          <FormGroup className='form-group_row'>
            <div className='group-row_item'>
              <Label>Nom</Label>
              <Input name='lastName' placeholder='Jane' />
            </div>
            <div className='group-row_item'>
              <Label>Prénom</Label>
              <Input name='firstName' placeholder='Doe' />
            </div>
          </FormGroup>
          <FormGroup>
            <Label>RPPS ID</Label>
            <Input name='rpps' placeholder='10123459789' />
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input name='email' type='email' placeholder='jane.doe@gmail.com' />
          </FormGroup>
          <FormGroup>
            <Label>Mot de passe</Label>
            <Input name='password' type='password' placeholder='************' />
          </FormGroup>
          <p>
            En créant un nouveau compte, vous acceptez les conditions générales
            et la politique de confidentialité d'Aceso.
          </p>
          <Button type='submit' variant='primary' fullWidth>
            Créer un compte
          </Button>
          <FormFooter>
            <p>
              Vous disposez déjà d'un compte ?{' '}
              <Link to='/login'>Se connecter</Link>
            </p>
          </FormFooter>
        </Form>
      </FormProvider>
    </main>
  );
}

export { SignUpForm };
