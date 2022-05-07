import * as React from 'react';
import { useAuth } from 'context/Auth';
import Form from './Form';
import { useForm, FormProvider } from 'react-hook-form';
import FormHeading from './FormHeading';
import FormGroup from './FormGroup';
import Label from './Label';
import Input from './Input';
import Button from './Button';
import Alert from './Alert';

function ResetPasswordForm() {
  const methods = useForm();
  const {
    user: { email },
    updateUser,
  } = useAuth();
  const [hasError, setHasError] = React.useState(null);
  const onSubmit = async ({ password, passwordConfirmation }) => {
    if (password === passwordConfirmation) {
      const { error } = await updateUser({ email, password });
      console.log(error);
    } else {
      setHasError({ message: 'Both passwords must match together.' });
    }
  };
  return (
    <main className='container'>
      <FormProvider {...methods}>
        <Form type='reset' onSubmit={methods.handleSubmit(onSubmit)}>
          <FormHeading>
            <h2>Register a new password</h2>
            <p>
              Enter a new password, this password must be different from
              previous used password.
            </p>
            {hasError && <Alert message={hasError.message} severity='error' />}
          </FormHeading>
          <FormGroup>
            <Label>Enter your new password</Label>
            <Input name='password' type='password' />
          </FormGroup>
          <FormGroup>
            <Label>Confirm your new password</Label>
            <Input name='passwordConfirmation' type='password' />
          </FormGroup>
          <Button type='submit' fullWidth>
            Reset Password
          </Button>
        </Form>
      </FormProvider>
    </main>
  );
}

export { ResetPasswordForm };
