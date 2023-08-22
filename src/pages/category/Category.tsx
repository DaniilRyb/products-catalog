import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { CardProduct } from '../../shared/card-product/CardProduct';
import { IProduct } from '../../entities/interfaces/IProduct';
import { useProducts } from '../../shared/hooks/use-products/useProducts';
import { Skeleton } from '../../shared/ui/skeleton/Skeleton';
import styled from 'styled-components';
import { FlexCardCategory } from '../../styles/flex-card-category/FlexCardCategory';

export const CategoryTitle = styled.div`
  margin: 0 0 0.5rem 0;
  font-weight: 500;
  line-height: 1.2;
`;

export const Category: FC = () => {
  const { category } = useParams();
  const { data, status, error } = useProducts(category);
  return (
    <div>
      {status === 'error' && <div>{error}</div>}
      {status === 'loading' && (
        <FlexCardCategory>
          <Skeleton />
        </FlexCardCategory>
      )}
      {status === 'success' && (
        <div>
          <FlexCardCategory>
            <CategoryTitle>{category}</CategoryTitle>
            {data?.products &&
              data.products.map((product: IProduct, index: number) => (
                <CardProduct
                  product={product}
                  category={category}
                  key={index}
                />
              ))}
          </FlexCardCategory>
        </div>
      )}
    </div>
  );
};
