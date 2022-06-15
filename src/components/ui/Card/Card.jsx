import * as React from 'react';
import { Avatar } from '../Avatar/Avatar';
import { Icon } from '../Icon/Icon';
import './Card.scss';

function Card({ person }) {
  return (
    <div className='card'>
      <div className='card_header'>
        <Avatar />
      </div>
      <div className='card_body'>
        <span className='card_body-name'>
          {person.lastName} {person.firstName}
        </span>
        <span className='card_body-relation'>{person.relation}</span>
        <ul className='card_body-links'>
          <li>
            <a href={`tel:${person.contact.phone}`}>
              <Icon name='phone' />
            </a>
          </li>
          <li>
            <a
              href={`https://www.google.com/maps/place/${person.contact.address}`}
              target='_blank'
              rel='noreferrer'
            >
              <Icon name='map-pin-2' />
            </a>
          </li>
          <li>
            <a href={`mailto:${person.contact.mail}`}>
              <Icon name='mail' />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export { Card };
