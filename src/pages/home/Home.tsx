import React, { FC } from 'react';
import { CardCategory } from '../../shared/ui/card-category/CardCategory';
import { useCategories } from '../../shared/hooks/use-categories/useCategories';
import Skeleton from '../../shared/ui/skeleton/Skeleton';
import { generateColors } from '../../shared/helpers/generateColor';

export const Home: FC = () => {
  const { data, status } = useCategories();
  const colors: string[] = generateColors(data?.length ? data.length : 100);

  return (
    <div>
      <div>
        <h5 style={{ margin: '20px' }} className='text-uppercase'>
          Категории
        </h5>
        {status === 'loading' && (
          <div className='d-flex flex-wrap gap-2 justify-content-center'>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        )}
        {status === 'success' && (
          <div className='d-flex flex-wrap gap-2 justify-content-center'>
            {data?.map((category, index) => (
              <CardCategory category={category} color={colors[index]} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
