import * as React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import {
  SettingsManageInformation,
  SettingsManagePassword,
  SettingsAccountDelete,
  SettingsManageTheme,
} from './SettingsForms';
import './Settings.scss';

function Settings() {
  const methods = useForm();
  return (
    <main className='container'>
      <h1>Paramètres</h1>
      <section className='section_settings'>
        <FormProvider {...methods}>
          <SettingsManageInformation handleSubmit={methods.handleSubmit} />
          <SettingsManageTheme handleSubmit={methods.handleSubmit} />
          <SettingsManagePassword handleSubmit={methods.handleSubmit} />
          <SettingsAccountDelete />
        </FormProvider>
      </section>
    </main>
  );
}

export { Settings };
