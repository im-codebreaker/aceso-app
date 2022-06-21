import * as React from 'react';
import { Button, Card, Modal } from 'components/ui';
import { AddNewRelation } from '../AddNewRelation';

function RelationshipTab({ patient }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <section className='relationship'>
      <div className='relationship_wrapper'>
        <h2>Entourage / Personnes ressources</h2>
        <ul className='relationship_wrapper-list'>
          {patient.family.map((person) => {
            return (
              <li key={person.id}>
                <Card person={person} />
              </li>
            );
          })}
          <li className='button_wrapper'>
            <Button variant='ghost' onClick={() => setIsOpen(true)}>
              Ajouter
            </Button>
          </li>
        </ul>
      </div>
      <div className='relationship_wrapper'>
        <h2>Intervenants / Équipe médicale</h2>
        <ul className='relationship_wrapper-list'>
          {patient.staff.map((person) => {
            return (
              <li key={person.id}>
                <Card person={person} />
              </li>
            );
          })}
          <li className='button_wrapper'>
            <Button variant='ghost' onClick={() => setIsOpen(true)}>
              Ajouter
            </Button>
          </li>
        </ul>
      </div>
      {isOpen && (
        <Modal id='portal-container'>
          <AddNewRelation patient={patient} setIsOpen={setIsOpen} />
        </Modal>
      )}
    </section>
  );
}

export { RelationshipTab };
