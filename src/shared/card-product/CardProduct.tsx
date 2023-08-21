import React, { FC } from 'react';
import styles from './CardProduct.module.css';
import { IProduct } from '../../entities/interfaces/IProduct';

type CardProductProps = {
  product: IProduct;
};
export const CardProduct: FC<CardProductProps> = ({ product }) => {
  return (
    <div className={styles.cardProduct}>
      <div>
        <img
          src={product.thumbnail}
          alt={product.brand}
          width='300px'
          height='300px'
          style={{ borderRadius: '10px' }}
        />
      </div>
      <div className={styles.m0}>
        <p className={styles.margin_padding0}>
          <strong>{product.title}</strong>
        </p>
      </div>
      <div className={styles.m0}>
        <p className={styles.margin_padding0}>{product.price}$</p>
      </div>
    </div>
  );
};
