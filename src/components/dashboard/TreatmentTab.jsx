import * as React from 'react';

import { Button, Icon, Table } from 'components/ui';

function TreatmentTab({ treatment, handleTreatmentDelete }) {
  return (
    <section className='medical_treatment'>
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
            {treatment.map((drug) => {
              return (
                <tr key={drug.id}>
                  <td>{drug.drug_name}</td>
                  <td>{drug.frequency[0]}</td>
                  <td>{drug.frequency[1]}</td>
                  <td>{drug.frequency[2]}</td>
                  <td>{drug.treatment_start}</td>
                  <td>{drug.treatment_end}</td>
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
