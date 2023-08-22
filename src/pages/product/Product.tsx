import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../../shared/card-product/CardProduct.module.css';
import { useProductById } from '../../shared/hooks/use-product-by-id/useProductById';

export const Product: FC = () => {
  const { id } = useParams();
  const { data: product } = useProductById(id);
  return (
    <div>
      {product && (
        <>
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
          <div className={styles.m0}>
            <p className={styles.margin_padding0}>{product.brand}</p>
          </div>
          <div className={styles.m0}>
            <p className={styles.margin_padding0}>{product.description}</p>
          </div>
          <div className={styles.m0}>
            <p className={styles.margin_padding0}>
              {product.discountPercentage}
            </p>
          </div>
          <div className={styles.m0}>
            <p className={styles.margin_padding0}>{product.rating}</p>
          </div>
          <div className={styles.m0}>
            <p className={styles.margin_padding0}>{product.stock}</p>
          </div>
          {product.images && (
            <div className={styles.m0}>
              <ul>
                {product.images.map((image) => (
                  <li>
                    <img src={image} alt={product?.brand} />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
};
