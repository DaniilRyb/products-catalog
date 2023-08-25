import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { CardProduct } from '../../shared/card-product/CardProduct';
import { IProduct } from '../../entities/product/model/IProduct';
import { useProducts } from '../../shared/hooks/use-products/useProducts';
import { Skeleton } from '../../shared/ui/skeleton/Skeleton';
import { StylesFlexCardCategory } from '../../styles/styles-flex-card-category/stylesFlexCardCategory';
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
        <StylesFlexCardCategory>
          <Skeleton />
        </StylesFlexCardCategory>
      )}
      {status === 'success' && (
        <div>
          <StylesFlexCardCategory>
            {data?.products &&
              data.products.map((product: IProduct, index: number) => (
                <CardProduct
                  product={product}
                  category={category}
                  key={index}
                />
              ))}
          </StylesFlexCardCategory>
        </div>
      )}
    </div>
  );
};
