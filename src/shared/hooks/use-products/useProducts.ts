import { useAppDispatch, useAppSelector } from '../../../store/typeHooks';
import { useEffect } from 'react';
import { getProductsAction } from '../../../store/slices/api/products/getProductsAction';

export const useProducts = (productName: string | undefined) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (productName) dispatch(getProductsAction(productName));
    console.log('useEffect status useProducts', status);
  }, []);

  const { data, error, status } = useAppSelector((state) => state.products);
  console.log('data useProducts', data);
  return {
    data,
    error,
    status,
  };
};
