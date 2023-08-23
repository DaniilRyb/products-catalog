import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../../shared/card-product/CardProduct.module.css';
import { useProductById } from '../../shared/hooks/use-product-by-id/useProductById';
import { CarouselComponent } from '../../shared/ui/carousel/Carousel';
import { Error } from '../../shared/error/Error';
import {
  DescriptionStyles,
  Price,
  ProductFlex,
  ProductStyles,
} from '../../styles/product/Product';
import { SkeletonProduct } from '../../shared/ui/skeleton-product/SkeletonProduct';

export const Product: FC = () => {
  const { id } = useParams();
  const { data: product, status } = useProductById(id);
  return (
    <>
      {status === 'error' && (
        <Error code={401} message={'error'} messageAxios={'error get data'} />
      )}
      {status === 'loading' && <ProductFlex>
        <SkeletonProduct />
      </ProductFlex>}
      {status === 'success' && product && (
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
                  PRICE: <Price>{product.price}$</Price>
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
              <DescriptionStyles>
                <p className={styles.margin_padding0}>BRAND: {product.brand}</p>
              </DescriptionStyles>
              <DescriptionStyles>
                <p className={styles.margin_padding0}>
                  DISCOUNT PERCENTAGE: {product.discountPercentage}
                </p>
              </DescriptionStyles>
              <DescriptionStyles>
                <p className={styles.margin_padding0}>
                  DESCRIPTION: {product.description}
                </p>
              </DescriptionStyles>
            </ProductStyles>
          </ProductFlex>
        </div>
      )}
    </>
  );
};
