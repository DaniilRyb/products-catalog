import React, { FC, useCallback, useMemo, useState } from 'react';
import { CardCategory } from '../../entities/categories/ui/card-category/CardCategory';
import { useCategories } from '../../shared/hooks/use-categories/useCategories';
import { Skeleton } from '../../shared/ui/skeleton/Skeleton';
import { generateColors } from '../../shared/helpers/generateColor';
import { StyledFlexCardCategory } from '../../styles/styles-flex-card-category/styledFlexCardCategory';
import { ProductsPagination } from '../../features/pagination/ui/products-pagination/ProductsPagination';

export const Main: FC = () => {
  const { categories, status } = useCategories();
  const colors: string[] = useMemo(() => {
    return generateColors(categories?.length ? categories.length : 16);
  }, [categories?.length]);

  return (
    <div>
      <div>
        {status === 'loading' && (
          <StyledFlexCardCategory>
            <Skeleton />
          </StyledFlexCardCategory>
        )}
        {status === 'success' && (
          <StyledFlexCardCategory>
            {categories?.length &&
              categories.map((category, index) => (
                <CardCategory category={category} color={colors[index]} />
              ))}
            <CardCategory category={'all'} color={'#AFC452'} />
          </StyledFlexCardCategory>
        )}
      </div>
    </div>
  );
};
