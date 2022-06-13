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
            <h2>Reset your password</h2>
            <p>
              Enter the email address associated to your Aceso account to
              request a link to reset your password.
            </p>
          </FormHeading>
          <FormGroup>
            <Label>Email</Label>
            <Input
              name='email'
              placeholder='Enter the email associated to your account'
            />
            {hasError && (
              <Alert
                message='Email submitted is not associated with any Aceso account'
                ghost
                severity='error'
              />
            )}
          </FormGroup>
          <Button type='submit'>Request a link</Button>
        </Form>
      </FormProvider>
    </main>
  );
}

export { RequestPasswordForm };
