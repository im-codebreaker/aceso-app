import * as React from 'react';
import patient from '../data/patient.json';

const PatientContext = React.createContext();

export function usePatient() {
  return React.useContext(PatientContext);
}
export default function PatientProvider({ children }) {
  const [patientList, setPatientList] = React.useState(patient);

  return (
    <PatientContext.Provider value={[patientList, setPatientList]}>
      {children}
    </PatientContext.Provider>
  );
}
