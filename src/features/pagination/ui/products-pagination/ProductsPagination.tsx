import React, { useCallback } from 'react';
import { usePagination } from '../../../../shared/hooks/use-pagination/usePagination';
import PaginationComponent from '../pagination/PaginationComponent';
import { IProduct } from '../../../../entities/product/model/IProduct';
import { CardProduct } from '../../../../entities/category-products/card-product/CardProduct';
import { StyledFlexCardCategory } from '../../../../styles/styles-flex-card-category/styledFlexCardCategory';
import { useProductsPagination } from '../../../../shared/hooks/use-products-pagination/useProductsPagination';
import { Skeleton } from '../../../../shared/ui/skeleton/Skeleton';

export const ProductsPagination = () => {
  const { data, status, error, dispatchPaginationProducts } =
    useProductsPagination(12, 0);
  const callback = useCallback(
    ({ limit, skip }: { limit: number; skip: number }) => {
      dispatchPaginationProducts({ limit, skip });
    },
    [],
  );

  const { skip, setOffset, setLimit, limit } = usePagination({
    callback,
  });

  return (
    <div>
      <div>
        <PaginationComponent
          limit={limit}
          skip={skip}
          setLimit={setLimit}
          setOffset={setOffset}
          total={100}
        />
      </div>
      <div style={{ marginTop: '1rem' }}>
        {status === 'error' && <div>{error}</div>}
        {status === 'loading' && <Skeleton />}
        {status === 'success' && (
          <StyledFlexCardCategory>
            {data?.data?.products &&
              data.data.products.map((product: IProduct, index: number) => (
                <CardProduct
                  product={product}
                  category={product.category}
                  key={index}
                />
              ))}
          </StyledFlexCardCategory>
        )}
      </div>
    </div>
  );
};
