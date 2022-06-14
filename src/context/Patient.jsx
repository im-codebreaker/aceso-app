import * as React from 'react';

const patientsList = [
  {
    id: 1,
    sex: 'men',
    firstName: 'Guy',
    lastName: 'Beranger',
    birthday: '01/09/1955',
    ssn: '1590213012345',
    ssn_city: 'Grenoble',
    health_mutual: 'La Mutuelle Santé',
    doctor: 'Dr Doe John',
    phone: '04.04.81.57.17',
    mobile: '06.21.31.21.32',
    address: '31 avenue Ferdinand de Lesseps',
    zup: '38000',
    city: 'Grenoble',
    history: [],
  },
  {
    id: 2,
    sex: 'women',
    firstName: 'Martine',
    lastName: 'Beranger',
    birthday: '28/02/1959',
    ssn: '1590213012345',
    ssn_city: 'Grenoble',
    health_mutual: 'Maaf',
    doctor: 'Dr Doe Jane',
    phone: '04.04.81.57.17',
    mobile: '06.21.31.21.32',
    address: '11 boulevard Jean-Pain',
    zup: '38000',
    city: 'Grenoble',
    history: [],
  },
  {
    id: 3,
    sex: 'women',
    firstName: 'Capucine',
    lastName: 'Bourget',
    birthday: '15/02/1966',
    ssn: '1590213012345',
    ssn_city: 'Grenoble',
    health_mutual: 'Maaf',
    doctor: 'Dr Doe Jane',
    phone: '04.04.81.57.17',
    mobile: '06.21.31.21.32',
    address: '14 Avenue Léon Blum',
    zup: '38100',
    city: 'Grenoble',
    history: [],
  },
  {
    id: 4,
    sex: 'women',
    firstName: 'Cécile',
    lastName: 'Chaussée',
    birthday: '30/08/1952',
    ssn: '1590213012345',
    ssn_city: 'Grenoble',
    health_mutual: 'Maaf',
    doctor: 'Dr Doe Jane',
    phone: '04.04.81.57.17',
    mobile: '06.21.31.21.32',
    address: '5 Rue du Dr Pascal',
    zup: '38130',
    city: 'Echirolles',
    history: [],
  },
  {
    id: 5,
    sex: 'men',
    firstName: 'Ernest',
    lastName: 'Gagnon',
    birthday: '11/03/1940',
    ssn: '1590213012345',
    ssn_city: 'Grenoble',
    health_mutual: 'Maaf',
    doctor: 'Dr Doe Jane',
    phone: '04.04.81.57.17',
    mobile: '06.21.31.21.32',
    address: '11 boulevard Jean-Pain',
    zup: '38000',
    city: 'Grenoble',
    history: [],
  },
  {
    id: 6,
    sex: 'men',
    firstName: 'Olivier',
    lastName: 'Lefebvre',
    birthday: '10/11/1958',
    ssn: '1590213012345',
    ssn_city: 'Grenoble',
    health_mutual: 'Maaf',
    doctor: 'Dr Doe Jane',
    phone: '04.04.81.57.17',
    mobile: '06.21.31.21.32',
    address: 'Rue Général Ferrié',
    zup: '38100',
    city: 'Grenoble',
    history: [],
  },
  {
    id: 7,
    sex: 'women',
    firstName: 'Estelle',
    lastName: 'Leroy',
    birthday: '06/02/1953',
    ssn: '1590213012345',
    ssn_city: 'Grenoble',
    health_mutual: 'Maaf',
    doctor: 'Dr Doe Jane',
    phone: '04.04.81.57.17',
    mobile: '06.21.31.21.32',
    address: '11 boulevard Jean-Pain',
    zup: '38000',
    city: 'Grenoble',
    history: [],
  },
  {
    id: 8,
    sex: 'men',
    firstName: 'René',
    lastName: 'Neville',
    birthday: '01/09/1955',
    ssn: '1590213012345',
    ssn_city: 'Grenoble',
    health_mutual: 'Maaf',
    doctor: 'Dr Doe Jane',
    phone: '04.04.81.57.17',
    mobile: '06.21.31.21.32',
    address: '8 rue Roger Guigue',
    zup: '38100',
    city: 'Grenoble',
    history: [],
  },
  {
    id: 9,
    sex: 'women',
    firstName: 'Wijdene',
    lastName: 'Ramlah',
    birthday: '21/12/1940',
    ssn: '1590213012345',
    ssn_city: 'Grenoble',
    health_mutual: 'Maaf',
    doctor: 'Dr Doe Jane',
    phone: '04.04.81.57.17',
    mobile: '06.21.31.21.32',
    address: '5 rue Roger Louis Lachat',
    zup: '38100',
    city: 'Grenoble',
    history: [],
  },
  {
    id: 10,
    sex: 'men',
    firstName: 'Daniel',
    lastName: 'Rouze',
    birthday: '03/05/1988',
    ssn: '1590213012345',
    ssn_city: 'Grenoble',
    health_mutual: 'La Matmut',
    doctor: 'Dr Doe Jane',
    phone: '04.04.81.57.17',
    mobile: '06.21.31.21.32',
    address: '8 Chemin Villebois',
    zup: '38100',
    city: 'Grenoble',
    history: [],
  },
];

const PatientContext = React.createContext();

export function usePatient() {
  return React.useContext(PatientContext);
}
export default function PatientProvider({ children }) {
  const [patientList, setPatientList] = React.useState(patientsList);

  const value = {
    patientList: patientList,
    addNewPatient: (patient) => setPatientList([...patientList, patient]),
  };

  return (
    <PatientContext.Provider value={value}>{children}</PatientContext.Provider>
  );
}