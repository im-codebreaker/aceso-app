import * as React from 'react';
import { Button, Icon, SearchInput, Table } from 'components/ui';
import { Link, useNavigate } from 'react-router-dom';
import { usePatient } from 'context/Patient';
import './PatientList.scss';

function PatientList() {
  let { patientList } = usePatient();
  let navigate = useNavigate();

  const [patient, setPatient] = React.useState([]);

  React.useEffect(() => {
    setPatient(patientList);
  }, [patientList]);

  return (
    <main className='container'>
      <h1>Liste des patients</h1>
      <section className='section_patient'>
        <div className='section_patient-topbar'>
          <SearchInput type='search' placeholder='Chercher un patient ...' />
          <Button
            type='button'
            fullWidth
            onClick={() => navigate('../add-new-patient')}
          >
            <Icon name='add' />
            Ajouter un patient
          </Button>
        </div>
        <div className='section_patient-wrapper'>
          <Table>
            <thead>
              <tr>
                <th>
                  <Icon name='user' />
                </th>
                <th>Nom du patient</th>
                <th>Date de naissance</th>
                <th>N° Sécurité Sociale</th>
                <th>Médecin traitant</th>
                <th>Dossier</th>
              </tr>
            </thead>
            <tbody>
              {patient.map((patient) => {
                return (
                  <tr key={patient.id}>
                    <td>
                      <Icon name={patient.sex} />
                    </td>
                    <td>
                      {patient.lastName} {patient.firstName}
                    </td>
                    <td>{patient.birthday}</td>
                    <td>{patient.ssn}</td>
                    <td>{patient.doctor}</td>
                    <td>
                      <Link to={`../patient-record/${patient.id}`}>
                        <Icon name='file' />
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </section>
    </main>
  );
}

export { PatientList };
