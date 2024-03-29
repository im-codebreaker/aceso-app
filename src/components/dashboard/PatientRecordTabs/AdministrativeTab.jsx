import * as React from 'react';
import { Icon } from 'components/ui';
import { calculateAge } from 'utils';

function AdministrativeTab({ patient }) {
  return (
    <section className='administrative_file'>
      <div className='administrative_file-identity wrapper_elevation'>
        <header className='box_header'>
          <h2>Identité du patient</h2>
        </header>
        <div className='box_content'>
          <div className='box_content-fullname'>
            <p>
              {patient.lastName} {patient.firstName}{' '}
              <span className='gender'>
                <Icon name={patient.gender} />
              </span>
            </p>
          </div>
          <div>
            <p>
              Né le {patient.birthday} à {patient.birthPlace} -{' '}
              {calculateAge(patient.birthday)} ans
            </p>
          </div>
          <ul className='box_content-medical'>
            <li>
              <p>
                <Icon name='bank-card' /> {patient.ssn} ({patient.ssnCity})
              </p>
            </li>
            <li>
              <p>
                <Icon name='service' /> {patient.insurance}
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
      <div className='administrative_file-history wrapper_elevation'>
        <header className='box_header'>
          <h2>Antécédent médicaux / Allergies / ETC</h2>
        </header>
        <div className='box_content'>
          {patient.history && patient.history.length !== 0 ? (
            <div> Content</div>
          ) : (
            <p>Aucune donnée disponible pour ce patient.</p>
          )}
        </div>
      </div>
      <div className='administrative_file-contact wrapper_elevation'>
        <header className='box_header'>
          <h2>Coordonnées du patient</h2>
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
            <Icon name='map-pin-2' /> {patient.address} - {patient.zip}{' '}
            {patient.city}
          </p>
          <iframe
            title='Google map'
            width='100%'
            height='280'
            frameBorder='0'
            src='https://maps.google.com/maps?width=100%25&amp;height=280&amp;hl=en&amp;q=14%20Avenue%20Léon%20Blum%2038100%20Grenoble+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export { AdministrativeTab };
