import * as React from 'react';

import { Button, Icon, SearchInput, Table } from 'components/ui';

function TreatmentTab({ treatment, handleTreatmentDelete }) {
  const [inputText, setInputText] = React.useState('');

  function handleChangeText(e) {
    setInputText(e.target.value);
  }

  const filteredTreatment = treatment.filter((el) => {
    if (inputText === '') {
      return el;
    } else {
      return el.drugName.includes(inputText);
    }
  });

  return (
    <section className='medical_treatment'>
      <div className='section_patient-topbar'>
        <SearchInput
          type='search'
          value={inputText}
          onChange={handleChangeText}
          placeholder='Chercher un traitement ...'
        />
        <Button type='button' fullWidth>
          <Icon name='add' />
          Ajouter un traitement
        </Button>
      </div>
      <div className='section_patient-wrapper'>
        <Table>
          <thead>
            <tr>
              <th>Médicaments - traitement</th>
              <th>Matin</th>
              <th>Midi</th>
              <th>Soir</th>
              <th>Début du traitement</th>
              <th>Fin du traitement</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredTreatment.map((drug) => {
              return (
                <tr key={drug.id}>
                  <td>{drug.drugName}</td>
                  <td>{drug.frequency[0]}</td>
                  <td>{drug.frequency[1]}</td>
                  <td>{drug.frequency[2]}</td>
                  <td>{drug.treatmentStart}</td>
                  <td>{drug.treatmentEnd}</td>
                  <td>
                    <Button
                      variant='ghost'
                      onClick={() => handleTreatmentDelete(drug.id)}
                    >
                      <Icon name='delete-bin' />
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </section>
  );
}

export { TreatmentTab };
