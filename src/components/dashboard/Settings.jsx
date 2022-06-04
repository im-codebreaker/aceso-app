import * as React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { SettingsManageInformation } from './SettingsManageInformation';
import { SettingsManagePassword } from './SettingsManagePassword';
import { SettingsAccountDelete } from './SettingsAccountDelete';
import { SettingsManageTheme} from './SettingsManageTheme';
import './Settings.scss';

function Settings() {
  const methods = useForm();
  return (
    <main className='container'>
      <h1>Settings</h1>
      <section className="section_settings">
      <FormProvider {...methods}>
        <SettingsManageInformation handleSubmit={methods.handleSubmit}/>
        <SettingsManageTheme handleSubmit={methods.handleSubmit} />
        <SettingsManagePassword handleSubmit={methods.handleSubmit}/>
        <SettingsAccountDelete />
      </FormProvider>
      </section>
    </main>
  );
}

export { Settings };
