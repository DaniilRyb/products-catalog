import React, { FC, useMemo } from 'react';
import { CardCategory } from '../../entities/categories/ui/card-category/CardCategory';
import { useCategories } from '../../shared/hooks/use-categories/useCategories';
import { Skeleton } from '../../shared/ui/skeleton/Skeleton';
import { generateColors } from '../../shared/helpers/generateColor';
import { StyledFlexCardCategory } from '../../styles/styles-flex-card-category/styledFlexCardCategory';

export const Home: FC = () => {
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
          <>
            <StyledFlexCardCategory>
              {categories?.length &&
                categories.map((category, index) => (
                  <CardCategory category={category} color={colors[index]} />
                ))}
            </StyledFlexCardCategory>
          </>
        )}
      </div>
    </div>
  );
};
