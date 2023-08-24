import React, { FC, useState } from 'react';
import styles from './CardProduct.module.css';
import { IProduct } from '../../entities/interfaces/IProduct';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardProductStyles = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 10px;
  margin: 40px;
  font-size: 1.5rem;
  text-transform: uppercase;

  &:hover {
    opacity: 0.65;
    transition: 0.75s opacity;
  }
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  a {
    text-decoration: none;
    color: #000;
  }
  img {
    border-radius: 10px;
  }
`;

const CardProductRelativeStyles = styled.div`
  position: relative;
`;

const CardProductStylesOnMouse = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
`;


type CardProductProps = {
  product: IProduct;
  category: string | undefined;
};

export const CardProduct: FC<CardProductProps> = ({ product, category }) => {
  const { id } = product;
  const {thumbnail, brand, title, price } = product
  const [isShown, setIsShown] = useState<boolean>(false);

  return (
    <CardProductStyles>
      <Link
        to={`/category/${category}/${id}`}>
        <CardProductRelativeStyles
             onMouseEnter={() => setIsShown(true)}
             onMouseLeave={() => setIsShown(false)}>
          <div>
            <img
              src={thumbnail}
              alt={brand}
              className={styles.imgStyles}
            />

            {isShown &&
              <CardProductStylesOnMouse>
                <div className={styles.m0}>
                  <p className={styles.margin_padding0}>
                    <strong>{title}</strong>
                  </p>
                </div>
                <div className={styles.m0}>
                  <p className={styles.margin_padding0}>{price}$</p>
                </div>
              </CardProductStylesOnMouse>
            }
          </div>
        </CardProductRelativeStyles>
      </Link>
    </CardProductStyles>
  );
};
