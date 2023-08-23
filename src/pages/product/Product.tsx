import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../../shared/card-product/CardProduct.module.css';
import { useProductById } from '../../shared/hooks/use-product-by-id/useProductById';
import { CarouselComponent } from '../../shared/ui/carousel/Carousel';
import styled from 'styled-components';

const ProductFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  height: 100vh;
`;

const ProductStyles = styled.div`
  width: 400px;
  height: 400px;

  img {
    width: 400px;
    height: 400px;
    border-radius: 10px;
  }
`;

const DescriptionStyles = styled.div`
  margin: 0;
  text-transform: uppercase;
  font-weight: bold;
`;

export const Product: FC = () => {
  const { id } = useParams();
  const { data: product } = useProductById(id);
  return (
    <>
      {product && (
        <div>
          <ProductFlex>
            <ProductStyles>
              {product.images && <CarouselComponent images={product.images} />}
            </ProductStyles>
            <ProductStyles>
              <img src={product.thumbnail} alt={product.brand} />
            </ProductStyles>
            <ProductStyles>
              <DescriptionStyles>
                <p className={styles.productTitle}>
                  <strong>{product.title}</strong>
                </p>
              </DescriptionStyles>
              <DescriptionStyles>
                <p className={styles.margin_padding0}>
                  PRICE: {product.price}$
                </p>
              </DescriptionStyles>
              <DescriptionStyles>
                <p className={styles.margin_padding0}>BRAND: {product.brand}</p>
              </DescriptionStyles>
              <DescriptionStyles>
                <p className={styles.margin_padding0}>
                  DESCRIPTION: {product.description}
                </p>
              </DescriptionStyles>
              <DescriptionStyles>
                <p className={styles.margin_padding0}>
                  DISCOUNT PERCENTAGE: {product.discountPercentage}
                </p>
              </DescriptionStyles>
              <DescriptionStyles>
                <p className={styles.margin_padding0}>
                  RATING: {product.rating}
                </p>
              </DescriptionStyles>
              <DescriptionStyles>
                <p className={styles.margin_padding0}>STOCK: {product.stock}</p>
              </DescriptionStyles>
            </ProductStyles>
          </ProductFlex>
        </div>
      )}
    </>
  );
};
