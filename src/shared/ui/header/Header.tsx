import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { InputDebounce } from '../../../features/user-search-products/ui/input-debounce/InputDebounce';

export const Header: FC = () => {
  return (
    <nav
      className='navbar navbar-expand-lg'
      style={{ backgroundColor: '#eceaea' }}
    >
      <div className='container-fluid'>
        <Link to='/' className='nav-link text-uppercase fw-bold'>
          <h5 className='p-1 m-0'>shop products</h5>
        </Link>
        <form className='d-flex' role='search'>
          <InputDebounce />
          {/*<button className='btn btn-outline-success' type='submit'>*/}
          {/*  Поиск*/}
          {/*</button>*/}
        </form>
      </div>
    </nav>
  );
};
