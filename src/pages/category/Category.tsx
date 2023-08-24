import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { CardProduct } from '../../shared/card-product/CardProduct';
import { IProduct } from '../../entities/interfaces/IProduct';
import { useProducts } from '../../shared/hooks/use-products/useProducts';
import { Skeleton } from '../../shared/ui/skeleton/Skeleton';
import { FlexCardCategory } from '../../styles/flex-card-category/FlexCardCategory';
import { Error } from '../../shared/error/Error';

export const Category: FC = () => {
  const { category } = useParams();
  const { data, status, error } = useProducts(category);
  return (
    <div>
      {status === 'error' && (
        <Error
          message={error?.message as string}
          code={error?.code as number}
          messageAxios={error?.messageAxios as string}
        />
      )}
      {status === 'loading' && (
        <FlexCardCategory>
          <Skeleton />
        </FlexCardCategory>
      )}
      {status === 'success' && (
        <div>
          <FlexCardCategory>
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
