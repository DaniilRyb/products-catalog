import React from 'react';
import { useParams } from 'react-router-dom';
import { CardProduct } from '../../shared/card-product/CardProduct';
import { IProduct } from '../../entities/interfaces/IProduct';
import { useProducts } from '../../shared/hooks/use-products/useProducts';

const Category = () => {
  const { id } = useParams();
  const {data, status, error} = useProducts(id)
  return (
    <div className='text-start'>
      <div className='h1 text-uppercase p-2 '>{id}</div>
      {status === "error" && <div>{error}</div>}
      {status === "loading" && <div>Загрузка...</div>}
      {status === "success" &&
        <div>
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
