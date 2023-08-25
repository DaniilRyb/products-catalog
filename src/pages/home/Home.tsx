import React, { FC, useMemo } from 'react';
import { CardCategory } from '../../entities/categories/ui/card-category/CardCategory';
import { useCategories } from '../../shared/hooks/use-categories/useCategories';
import { Skeleton } from '../../shared/ui/skeleton/Skeleton';
import { generateColors } from '../../shared/helpers/generateColor';
import { StylesFlexCardCategory } from '../../styles/styles-flex-card-category/stylesFlexCardCategory';

export const Home: FC = () => {
  const { categories, status } = useCategories();
  const colors: string[] = useMemo(() => {
    return generateColors(categories?.length ? categories.length : 16);
  }, [categories?.length]);
  return (
    <div>
      <div>
        {status === 'loading' && (
          <StylesFlexCardCategory>
            <Skeleton />
          </StylesFlexCardCategory>
        )}
        {status === 'success' && (
          <>
            <StylesFlexCardCategory>
              {categories?.length &&
                categories.map((category, index) => (
                  <CardCategory category={category} color={colors[index]} />
                ))}
            </StylesFlexCardCategory>
          </>
        )}
      </div>
    </div>
  );
};
