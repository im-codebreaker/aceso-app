import './App.scss';
import * as React from 'react';
import {
  Home,
  LogInForm,
  SignUpForm,
  RequestPasswordForm,
  ResetPasswordForm,
  RequestPasswordConfirmation,
  ResetPasswordConfirmation,
} from 'components/connexion';
import {
  AddNewPatient,
  CareList,
  Organization,
  Overview,
  PatientList,
  PatientRecord,
  Settings,
} from 'components/dashboard';
import { PrivateRoute } from 'routes/PrivateRoute';
import { Routes, Route } from 'react-router-dom';
import AuthProvider from 'context/Auth';

function App() {
  return (
    <>
      <AuthProvider>
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
          <Route path='dashboard' element={<PrivateRoute />}>
            <Route index element={<Overview />} />
            <Route path='patient-list' element={<PatientList />} />
            <Route
              path='patient-record/:patientId'
              element={<PatientRecord />}
            />
            <Route path='add-new-patient' element={<AddNewPatient />} />
            <Route path='care-list' element={<CareList />} />
            <Route path='organization' element={<Organization />} />
            <Route path='settings' element={<Settings />} />
          </Route>
          <Route path='*' element={<p>There's nothing here ! 404</p>} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
