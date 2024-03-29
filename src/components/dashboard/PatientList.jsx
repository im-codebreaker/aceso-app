import * as React from 'react';
import { Button, Icon, SearchInput, Table } from 'components/ui';
import { Link, useNavigate } from 'react-router-dom';
import { usePatient } from 'context/Patient';
import { calculateAge } from 'utils';
import './PatientList.scss';

function PatientList() {
  let [patientList] = usePatient();
  let navigate = useNavigate();

  const [inputText, setInputText] = React.useState('');

  function handleChangeText(e) {
    setInputText(e.target.value);
  }

  const filteredPatient = patientList.filter((el) => {
    if (inputText === '') {
      return el;
    } else {
      return el.lastName.includes(inputText);
    }
  });

  return (
    <main className='container'>
      <h1>Liste des patients</h1>
      <section className='section_patient'>
        <div className='section_patient-topbar'>
          <SearchInput
            type='search'
            value={inputText}
            onChange={handleChangeText}
            placeholder='Chercher un patient ...'
          />
          <Button
            type='button'
            fullWidth
            onClick={() => navigate('../add-new-patient')}
          >
            <Icon name='add' />
            Ajouter un patient
          </Button>
        </div>
        <div className='wrapper_elevation'>
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
              {filteredPatient.map((patient) => {
                return (
                  <tr key={patient.id}>
                    <td>
                      <Icon name={patient.gender} />
                    </td>
                    <td>
                      {patient.lastName} {patient.firstName}
                    </td>
                    <td>
                      {patient.birthday} - {calculateAge(patient.birthday)} ans
                    </td>
                    <td>{patient.ssn}</td>
                    <td>{patient.doctor}</td>
                    <td>
                      <Link to={`../patient-record/${patient.id}`}>
                        <Icon name='dossier' />
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
