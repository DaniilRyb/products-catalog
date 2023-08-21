import { FC } from 'react';
import styles from './CardCategory.module.css';
import { NavLink } from 'react-router-dom';

type CardCategoryProps = {
  category: string;
  color: string;
};
export const CardCategory: FC<CardCategoryProps> = ({ category, color }) => {
  return (
    <NavLink to={`/category/${category}`} className='text-decoration-none text-black'>
      <div
        className={styles.cardCategory}
        style={{ boxShadow: `1px 1px 10px 2px ${color}` }}
      >
        <h4 className='text-uppercase'>{category}</h4>
      </div>
    </NavLink>
  );
};
