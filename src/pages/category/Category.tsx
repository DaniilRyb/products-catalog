import React from 'react';
import { useFetch } from '../../shared/hooks/useFetch/useFetch';
import { useParams } from 'react-router-dom';
import { ICategory } from '../../entities/interfaces/ICategory';
import { CardProduct } from '../../shared/card-product/CardProduct';
import { IProduct } from '../../entities/interfaces/IProduct';

const Category = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useFetch<ICategory>(
    `https://dummyjson.com/products/category/${id}`,
  );
  return (
    <div className='text-start'>
      <div className='h1 text-uppercase p-2 '>{id}</div>
      {isError && <div>Ошибка :(</div>}

      {
        <div>
          {isLoading && <div>Загрузка...</div>}
          <div>
            <div className='d-flex flex-wrap justify-content-center gap-3 align-items-center'>
              {data?.products.map((product: IProduct, index: number) => (
                <CardProduct product={product} key={index} />
              ))}
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default Category;
