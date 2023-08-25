import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/typeHooks';
import { searchProductsAction } from '../api/searchProductsAction';
export const useSearchProducts = (inputValue: string) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(searchProductsAction(inputValue));
  }, [inputValue]);

  const { productsList, status, error } = useAppSelector(
    (state) => state.productsByTitle,
  );

  return {
    productsList,
    status,
    error,
  };
};
