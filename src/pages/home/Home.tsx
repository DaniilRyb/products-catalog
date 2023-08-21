import React, { FC } from 'react';
import { CardCategory } from '../../shared/ui/card-category/CardCategory';
import { useCategories } from '../../shared/hooks/use-categories/useCategories';
import { Skeleton } from '../../shared/ui/skeleton/Skeleton';
import { generateColors } from '../../shared/helpers/generateColor';
import { FlexCardCategory } from '../../styles/flex-card-category/FlexCardCategory';
import { Categories } from '../../styles/categories/Categories';

export const Home: FC = () => {
  const { categories, status } = useCategories();
  const colors: string[] = generateColors(
    categories?.length ? categories.length : 100,
  );
  console.log('categories Home page', categories);
  return (
    <div>
      <div>
        <Categories>Категории</Categories>
        {status === 'loading' && (
          <FlexCardCategory>
            <Skeleton />
          </FlexCardCategory>
        )}
        {status === 'success' && (
          <FlexCardCategory>
            {categories?.map((category, index) => (
              <CardCategory category={category} color={colors[index]} />
            ))}
          </FlexCardCategory>
        )}
      </div>
    </div>
  );
};
