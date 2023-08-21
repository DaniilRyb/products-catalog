import React, { FC } from 'react';
import { Link } from 'react-router-dom';

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
        <div className='collapse navbar-collapse' id='navbarScroll'>
          <ul className='navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll'></ul>
          <form className='d-flex' role='search'>
            <input
              className='form-control me-2'
              type='search'
              placeholder='Поиск'
            />
            <button className='btn btn-outline-success' type='submit'>
              Поиск
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
