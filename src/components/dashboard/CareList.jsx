import * as React from 'react';
import cares from '../../data/cares.json';
import { getKeyByValue } from 'utils';
import { Icon, Select } from 'components/ui';
import './CareList.scss';

const options = {
  params: 'Paramètres vitaux et physiologiques',
  hygiene: "Soins d'hygiènes",
  preventive: 'Soins de prévention',
  preparation: 'Préparations des thérapeutiques',
  administration: 'Administration des thérapeutiques',
  bandages: 'Soins de plaies et pansements',
  samples: 'Ponctions et prélèvements',
  cathether: 'Cathéters et perfusions',
  probes: 'Sondes et sondages',
  emergency: "Soins d'urgence et de réanimation",
  ergonomy: 'Technique de manutention et ergonomie',
};

function CareList() {
  const [option, setOption] = React.useState('');

  function handleChange(event) {
    setOption(event.target.value);
  }

  const filteredCareList = cares.filter((el) => {
    if (option === '') {
      return el;
    } else {
      return el.category === options[option];
    }
  });

  return (
    <main className='container'>
      <h1>Liste des soins</h1>
      <section className='section_carelist'>
        <div className='section_carelist-topbar'>
          <Select
            options={options}
            placeholder='Lister tout les soins'
            handleChange={handleChange}
          />
        </div>
        <ul className='section_carelist-list'>
          {filteredCareList.map((care) => {
            return (
              <li
                key={care.id}
                className={`carelist_list-item ${getKeyByValue(
                  options,
                  care.category
                )}`}
              >
                <div className='list_item-header'>
                  <h2>{care.name}</h2>
                  <span>{care.category}</span>
                </div>
                <p>
                  {care.description === ''
                    ? 'Acune description disponible pour le moment'
                    : care.description}
                </p>
                <a
                  href={care.url}
                  target='_blank'
                  rel='noreferrer'
                  className='technical_link'
                >
                  Lien de la fiche technique <Icon name='arrow-drop-right' />
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export { CareList };
