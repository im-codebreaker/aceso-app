import * as React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { SettingsPersonnalInformation } from './SettingsPersonnalInformation';
import { SettingsPasswordUpdate } from './SettingsPasswordUpdate';
import { SettingsAccountDelete } from './SettingsAccountDelete';
import './Settings.scss';

function Settings() {
  const methods = useForm();
  return (
    <main className='container'>
      <h1>Settings</h1>
      <section className="section_settings">
      <FormProvider {...methods}>
        <SettingsPersonnalInformation handleSubmit={methods.handleSubmit}/>
        <SettingsPasswordUpdate handleSubmit={methods.handleSubmit}/>
        <SettingsAccountDelete />
      </FormProvider>
      </section>
    </main>
  );
}

export { Settings };
