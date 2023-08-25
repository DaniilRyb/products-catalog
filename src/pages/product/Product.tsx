import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../../shared/card-product/CardProduct.module.css';
import { useProductById } from '../../shared/hooks/use-product-by-id/useProductById';
import { CarouselComponent } from '../../entities/product/ui/carousel/Carousel';
import { Error } from '../../shared/error/Error';
import {
  StyledDescription,
  Price,
  StyledProduct,
} from '../../styles/style-product/stylesProduct';
import { SkeletonProduct } from '../../entities/product/ui/skeleton-product/SkeletonProduct';
import { StyledFlexCardCategory } from '../../styles/styles-flex-card-category/styledFlexCardCategory';

export const Product: FC = () => {
  const { id } = useParams();
  const { data: product, status } = useProductById(id);
  return (
    <>
      {status === 'error' && (
        <Error code={401} message={'error'} messageAxios={'error get data'} />
      )}
      {status === 'loading' && (
        <StyledFlexCardCategory>
          <SkeletonProduct />
        </StyledFlexCardCategory>
      )}
      {status === 'success' && product && (
        <div>
          <StyledFlexCardCategory>
            <StyledProduct>
              {product.images && <CarouselComponent images={product.images} />}
            </StyledProduct>
            <StyledProduct>
              <img src={product.thumbnail} alt={product.brand} />
            </StyledProduct>
            <StyledProduct>
              <StyledDescription>
                <p className={styles.productTitle}>
                  <strong>{product.title}</strong>
                </p>
              </StyledDescription>
              <StyledDescription>
                <p className={styles.margin_padding0}>
                  PRICE: <Price>{product.price}$</Price>
                </p>
              </StyledDescription>
              <StyledDescription>
                <p className={styles.margin_padding0}>
                  DISCOUNT PERCENTAGE: {product.discountPercentage}
                </p>
              </StyledDescription>
              <StyledDescription>
                <p className={styles.margin_padding0}>
                  RATING: {product.rating}
                </p>
              </StyledDescription>
              <StyledDescription>
                <p className={styles.margin_padding0}>STOCK: {product.stock}</p>
              </StyledDescription>
              <StyledDescription>
                <p className={styles.margin_padding0}>BRAND: {product.brand}</p>
              </StyledDescription>
              <StyledDescription>
                <p className={styles.margin_padding0}>
                  DESCRIPTION: {product.description}
                </p>
              </StyledDescription>
            </StyledProduct>
          </StyledFlexCardCategory>
        </div>
      )}
    </>
  );
};
