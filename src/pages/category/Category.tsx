import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { CardProduct } from '../../entities/category-products/card-product/CardProduct';
import { IProduct } from '../../entities/product/model/IProduct';
import { useProducts } from '../../shared/hooks/use-products/useProducts';
import { Skeleton } from '../../shared/ui/skeleton/Skeleton';
import { StyledFlexCardCategory } from '../../styles/styles-flex-card-category/styledFlexCardCategory';

export const Category: FC = () => {
  const { category } = useParams();
  const { data, status, error } = useProducts(category);
  return (
    <div>
      {status === 'error' && (
        <div>
          {error?.code} {error?.message}
        </div>
      )}
      {status === 'loading' && (
        <StyledFlexCardCategory>
          <Skeleton />
        </StyledFlexCardCategory>
      )}
      {status === 'success' && (
        <div>
          <StyledFlexCardCategory>
            {data?.products &&
              data.products.map((product: IProduct, index: number) => (
                <CardProduct
                  product={product}
                  category={category}
                  key={index}
                />
              ))}
          </StyledFlexCardCategory>
        </div>
      )}
    </div>
  );
};
