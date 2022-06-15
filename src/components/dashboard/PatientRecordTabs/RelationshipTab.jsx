import * as React from 'react';
import { Card } from 'components/ui';

function RelationshipTab({ family, staff }) {
  console.log(family);
  return (
    <section className='relationship'>
      <div className='relationship_wrapper'>
        <h2>Entourage / Personnes ressources</h2>
        <ul className='relationship_wrapper-list'>
          {family.map((person) => {
            return (
              <li key={person.id}>
                <Card person={person} />
              </li>
            );
          })}
        </ul>
      </div>
      <div className='relationship_wrapper'>
        <h2>Intervenants / Équipe médicale</h2>
        <ul className='relationship_wrapper-list'>
          {staff.map((person) => {
            return (
              <li key={person.id}>
                <Card person={person} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export { RelationshipTab };
