import React, { FC } from 'react';
import styles from './CardProduct.module.css';
import { IProduct } from '../../entities/interfaces/IProduct';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardProductStyles = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 10px;
  border: 1px solid #ccc;
  margin: 40px;
  text-decoration: none;
  text-transform: none;

  &:hover {
    opacity: 0.75;
    transition: 0.75s opacity;
  }
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

type CardProductProps = {
  product: IProduct;
  category: string | undefined;
};

export const CardProduct: FC<CardProductProps> = ({ product, category }) => {
  const { id } = product;

  return (
    <CardProductStyles>
      <Link to={`/category/${category}/${id}`}>
        <div>
          <img
            src={product.thumbnail}
            alt={product.brand}
            className={styles.imgStyles}
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
      </Link>
    </CardProductStyles>
  );
};
