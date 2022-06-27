import * as React from 'react';
import { Icon } from '../Icon/Icon';
import './Toast.scss';

const matchIconFromType = {
  infos: 'notification',
  success: 'check',
  warning: 'alarm-warning',
  alert: 'error-warning',
};

function Toast({ className = '', handleClose, type, children }) {
  const defineClass = `toast ${type} ${className}`.trim();
  return (
    <div className={defineClass}>
      <Icon name={matchIconFromType[type]} />
      <div className='toast_message'>{children}</div>
    </div>
  );
}

export { Toast };
