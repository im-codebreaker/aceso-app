import * as React from 'react';
import { Icon } from '../Icon/Icon';
import './SearchInput.scss';

function SearchInput({ className = '', placeholder = '', ...rest }) {
  return (
    <div className='search_group'>
      <input
        className={`form-control input_search ${className}`.trim()}
        type='search'
        placeholder={placeholder}
        {...rest}
      />
      <Icon className='icon_search' name='search' />
    </div>
  );
}

export { SearchInput };
