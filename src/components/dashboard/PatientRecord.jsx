import * as React from 'react';
import { usePatient } from 'context/Patient';
import { useParams } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { AdministrativeTab } from './AdministrativeTab';
import { TreatmentTab } from './TreatmentTab';

import './PatientRecord.scss';

function PatientRecord() {
  let { patientId } = useParams();
  const [patientList] = usePatient();

  const [patient, setPatient] = React.useState({});

  React.useEffect(() => {
    const [patient] = patientList.filter(
      (patient) => patient.id === Number(patientId)
    );

    setPatient(patient);
  }, [patientList, patientId]);

  function handleTreatmentDelete(id) {
    const treatment = patient.treatment.filter((drug) => drug.id !== id);
    setPatient({ ...patient, treatment });
  }

  return (
    <main className='container'>
      <h1>Dossier du patient</h1>
      <Tabs>
        <TabList>
          <Tab>Fiche Administrative</Tab>
          <Tab>Entourage/Intervenants</Tab>
          <Tab>Fiche Traitement</Tab>
          <Tab>Diagramme de soins</Tab>
        </TabList>
        <TabPanel>
          <AdministrativeTab patient={patient} />
        </TabPanel>
        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <TreatmentTab
            treatment={patient.treatment}
            handleTreatmentDelete={handleTreatmentDelete}
          />
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
      </Tabs>
    </main>
  );
}

export { PatientRecord };
