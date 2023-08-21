import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { CardProduct } from '../../shared/card-product/CardProduct';
import { IProduct } from '../../entities/interfaces/IProduct';
import { useProducts } from '../../shared/hooks/use-products/useProducts';
import { Skeleton } from '../../shared/ui/skeleton/Skeleton';
import { FlexCardCategory } from '../../styles/flex-card-category/FlexCardCategory';

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
          <div className='h1'>{category}</div>
          <FlexCardCategory>
            {data?.products.map((product: IProduct, index: number) => (
              <CardProduct product={product} key={index} />
            ))}
          </FlexCardCategory>
        </div>
      )}
    </div>
  );
};
