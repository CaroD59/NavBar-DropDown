import React from 'react';
import ButtonCSS from './ButtonCSS';
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <ButtonCSS>
      <Link to='sign-up'>
        <button className='btn'>Sign up</button>{' '}
      </Link>
    </ButtonCSS>
  );
}
