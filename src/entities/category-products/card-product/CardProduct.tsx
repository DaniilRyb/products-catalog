import React, { FC, useState } from 'react';
import styles from './CardProduct.module.css';
import { IProduct } from '../../product/model/IProduct';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledCardProduct = styled.div`
  border-radius: 10px;
  font-size: 1.5rem;
  text-transform: uppercase;

  &:hover {
    opacity: 0.65;
    transition: 0.75s opacity;
  }

  a {
    text-decoration: none;
  }

  img {
    border-radius: 10px;
  }
`;

const StyledCardProductRelative = styled.div`
  position: relative;
`;

const StyledCardProductOnMouse = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;

  div {
    color: #000;
  }
`;

type CardProductProps = {
  product: IProduct;
  category: string | undefined;
};

export const CardProduct: FC<CardProductProps> = ({ product, category }) => {
  const { id } = product;
  const { thumbnail, brand, title, price } = product;
  const [isShown, setIsShown] = useState<boolean>(false);

  return (
    <StyledCardProduct>
      <Link to={`/${category}/${id}`}>
        <StyledCardProductRelative
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          <div>
            <img src={thumbnail} alt={brand} className={styles.imgStyles} />
            {isShown && (
              <StyledCardProductOnMouse>
                <div className={styles.m0}>
                  <p className={styles.margin_padding0}>
                    <strong>{title}</strong>
                  </p>
                </div>
                <div className={styles.m0}>
                  <p className={styles.margin_padding0}>{price}$</p>
                </div>
              </StyledCardProductOnMouse>
            )}
          </div>
        </StyledCardProductRelative>
      </Link>
    </StyledCardProduct>
  );
};
