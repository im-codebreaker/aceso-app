import * as React from 'react';
import { Button, Icon, Table } from 'components/ui';
function TreatmentTab() {
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
            <tr>
              <td>METFORMINE EG 1000 mg</td>
              <td>1</td>
              <td>0</td>
              <td>1</td>
              <td>13/01/2022</td>
              <td>13/01/2022</td>
              <td>
                <Button variant='ghost'>
                  <Icon name='pencil' />
                </Button>
                <Button variant='ghost'>
                  <Icon name='delete-bin' />
                </Button>
              </td>
            </tr>
            <tr>
              <td>METFORMINE EG 1000 mg</td>
              <td>1</td>
              <td>0</td>
              <td>1</td>
              <td>13/01/2022</td>
              <td>13/01/2022</td>
              <td>
                <Button variant='ghost'>
                  <Icon name='pencil' />
                </Button>
                <Button variant='ghost'>
                  <Icon name='delete-bin' />
                </Button>
              </td>
            </tr>
            <tr>
              <td>METFORMINE EG 1000 mg</td>
              <td>1</td>
              <td>0</td>
              <td>1</td>
              <td>13/01/2022</td>
              <td>13/01/2022</td>
              <td>
                <Button variant='ghost'>
                  <Icon name='pencil' />
                </Button>
                <Button variant='ghost'>
                  <Icon name='delete-bin' />
                </Button>
              </td>
            </tr>
            <tr>
              <td>METFORMINE EG 1000 mg</td>
              <td>1</td>
              <td>0</td>
              <td>1</td>
              <td>13/01/2022</td>
              <td>13/01/2022</td>
              <td>
                <Button variant='ghost'>
                  <Icon name='pencil' />
                </Button>
                <Button variant='ghost'>
                  <Icon name='delete-bin' />
                </Button>
              </td>
            </tr>
            <tr>
              <td>METFORMINE EG 1000 mg</td>
              <td>1</td>
              <td>0</td>
              <td>1</td>
              <td>13/01/2022</td>
              <td>13/01/2022</td>
              <td>
                <Button variant='ghost'>
                  <Icon name='pencil' />
                </Button>
                <Button variant='ghost'>
                  <Icon name='delete-bin' />
                </Button>
              </td>
            </tr>
            <tr>
              <td>METFORMINE EG 1000 mg</td>
              <td>1</td>
              <td>0</td>
              <td>1</td>
              <td>13/01/2022</td>
              <td>13/01/2022</td>
              <td>
                <Button variant='ghost'>
                  <Icon name='pencil' />
                </Button>
                <Button variant='ghost'>
                  <Icon name='delete-bin' />
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </section>
  );
}

export { TreatmentTab };
