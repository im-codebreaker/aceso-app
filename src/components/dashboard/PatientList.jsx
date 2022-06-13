import * as React from 'react';
import { Button, Icon, SearchInput } from 'components/ui';
import { Link } from 'react-router-dom';
import { usePatient } from 'context/Patient';
import './PatientList.scss';

function PatientList() {
  let { patientList } = usePatient();

  const [patient, setPatient] = React.useState([]);

  React.useEffect(() => {
    setPatient(patientList);
  }, []);

  return (
    <main className='container'>
      <h1>PatientList</h1>
      <section className='section_patient'>
        <div className='section_patient-topbar'>
          <SearchInput type='search' placeholder='Search a patient ...' />
          <Button type='button' fullWidth>
            <Icon name='add' />
            Add a patient
          </Button>
        </div>
        <div className='section_patient-wrapper'>
          <table className='patient_table'>
            <thead>
              <tr>
                <th>
                  <Icon name='user' />
                </th>
                <th>Patient Name</th>
                <th>Birthday date</th>
                <th>Social security number</th>
                <th>Referring doctor</th>
                <th>Record</th>
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
          </table>
        </div>
      </section>
    </main>
  );
}

export { PatientList };
