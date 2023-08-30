import { useAppDispatch, useAppSelector } from '../../../store/typeHooks';
import { useEffect } from 'react';
import { getProductsAction } from '../../../entities/category-products/api/getProductsAction';

export const useProducts = (productName: string | undefined) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (productName) dispatch(getProductsAction(productName));
  }, []);

  const { data, error, status } = useAppSelector((state) => state.products);
  return {
    data,
    error,
    status,
  };
};
