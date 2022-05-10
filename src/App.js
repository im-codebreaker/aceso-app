import './App.scss';
import * as React from 'react';
import {
  Header,
  Home,
  Footer,
  LogInForm,
  RequestPasswordForm,
  ResetPasswordConfirmation,
  SignUpForm,
  ResetPasswordForm,
  Dashboard,
  RequestPasswordConfirmation,
} from 'components';
import { Routes, Route } from 'react-router-dom';
import AuthProvider from 'context/Auth';

function App() {
  const user = false;
  return (
    <>
      <AuthProvider>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path='login' element={<LogInForm />} />
          <Route path='register' element={<SignUpForm />} />
          <Route path='request-password'>
            <Route index element={<RequestPasswordForm />} />
            <Route
              path='confirmation'
              element={<RequestPasswordConfirmation />}
            />
          </Route>
          <Route path='reset-password'>
            <Route index element={<ResetPasswordForm />} />
            <Route
              path='confirmation'
              element={<ResetPasswordConfirmation />}
            />
          </Route>
          <Route path='dashboard' element={<Dashboard user={user} />} />
          <Route path='*' element={<p>There's nothing here ! 404</p>} />
        </Routes>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
