import * as React from 'react';

export default function Form({ type, children }) {
  return <form className={`${type}-form container`}>{children}</form>;
}
