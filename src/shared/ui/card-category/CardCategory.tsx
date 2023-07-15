import React, { FC } from 'react';
import './CardCategory.css';
import { NavLink } from 'react-router-dom';

type CardCategoryProps = {
  category: string;
};
export const CardCategory: FC<CardCategoryProps> = ({ category }) => {
  return (
    <NavLink to={`/category/${category}`} className='text-decoration-none'>
      <div className='card-category'>
        <h4 className='text-uppercase'>{category}</h4>
      </div>
    </NavLink>
  );
};
