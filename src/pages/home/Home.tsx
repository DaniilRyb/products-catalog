import React from 'react';
import { CardCategory } from '../../shared/ui/card-category/CardCategory';
import { useCategories } from '../../shared/hooks/use-categories/useCategories';
import { Spinner } from 'react-bootstrap';
import Skeleton from '../../shared/ui/skeleton/Skeleton';

const Home = () => {
  const { data, status, error } = useCategories()

  return (
    <div>
      <h5 style={{ margin: '20px' }} className='text-uppercase'>
        Категории
      </h5>
      {
        status === "loading" && <div className='d-flex flex-wrap gap-2 justify-content-center'>
          <Skeleton/>
          <Skeleton/>
          <Skeleton/>
          <Skeleton/>
          <Skeleton/>
          <Skeleton/>
          <Skeleton/>
          <Skeleton/>

        </div>
      }
      {
        status === "success" &&
        <div className='d-flex flex-wrap gap-2 justify-content-center'>
          {data?.map((category) => (
            <CardCategory category={category} />
          ))}
        </div>
      }
    </div>
  );
};

export default Home;
