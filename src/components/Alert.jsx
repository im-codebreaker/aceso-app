import * as React from 'react';
import Icon from './Icon';
import './Alert.scss';

const iconRelation = {
  error: 'error-warning',
  information: 'information',
  success: 'checkbox-circle',
  warning: 'error-warning',
};

export default function Alert({ className = '', message, severity, ghost }) {
  return (
    <div
      className={`alert alert-${severity} ${
        ghost ? 'ghost' : ''
      } ${className}`.trim()}
    >
      <p>
        <Icon name={iconRelation[severity]} />
        {message}
      </p>
    </div>
  );
}
