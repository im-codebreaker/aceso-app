import * as React from 'react';
import { usePatient } from 'context/Patient';
import { useParams } from 'react-router-dom';
import { Icon } from 'components/ui';
import './PatientRecord.scss';

function formatAdress(street, zup, city) {
  const fullAdress = `${street} ${zup} ${city}`;

  return fullAdress.replaceAll(' ', '%20');
}

function PatientRecord() {
  let { patientId } = useParams();
  let { patientList } = usePatient();

  const [patient, setPatient] = React.useState({});

  React.useEffect(() => {
    const [patient] = patientList.filter(
      (patient) => patient.id === Number(patientId)
    );

    setPatient(patient);
  }, []);

  return (
    <main className='container'>
      <h1>Patient Record</h1>
      <section className='administrative_file'>
        <div className='administrative_file-identity'>
          <header className='box_header'>
            <h2>Patient Identity</h2>
          </header>
          <div className='box_content'>
            <div>
              <p>
                {patient.lastName} {patient.firstName}{' '}
                <span className='gender'>
                  <Icon name={patient.sex} />
                </span>
              </p>
            </div>
            <div>
              <p>Né le {patient.birthday} à Grenoble - 66 ans</p>
            </div>
            <ul>
              <li>
                <p>
                  <Icon name='bank-card' /> {patient.ssn} ({patient.ssn_city})
                </p>
              </li>
              <li>
                <p>
                  <Icon name='service' /> {patient.health_mutual}
                </p>
              </li>
              <li>
                <p>
                  <Icon name='stethoscope' /> {patient.doctor}
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className='administrative_file-history'>
          <header className='box_header'>
            <h2>Medical history / Allergies / ETC</h2>
          </header>
          <div className='box_content'>
            {patient.history && patient.history.length !== 0 ? (
              <div> Content</div>
            ) : (
              <p>No data available for this patient</p>
            )}
          </div>
        </div>
        <div className='administrative_file-contact'>
          <header className='box_header'>
            <h2>Contact Information</h2>
          </header>
          <div className='box_content'>
            <div className='contact_phone'>
              <p>
                <Icon name='phone' /> {patient.phone}
              </p>
              <p>
                <Icon name='phone' /> {patient.mobile}
              </p>
            </div>
            <p>
              <Icon name='map-pin-2' /> {patient.address} - {patient.zup}{' '}
              {patient.city}
            </p>
            <iframe
              width='100%'
              height='280'
              frameBorder='0'
              src='https://maps.google.com/maps?width=100%25&amp;height=280&amp;hl=en&amp;q=14%20Avenue%20Léon%20Blum%2038100%20Grenoble+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}

export { PatientRecord };
