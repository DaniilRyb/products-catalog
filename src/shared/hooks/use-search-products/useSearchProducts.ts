import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/typeHooks';
import { searchProductsAction } from '../../../features/user-search-products/api/searchProductsAction';
import { debounce } from '../../../features/user-search-products/debounce/debounce';
export const useSearchProducts = (inputValue: string) => {
  const dispatch = useAppDispatch();

  const debounceInputSearchProducts = useCallback(
    debounce((userInput) => dispatch(searchProductsAction(userInput)), 1000),
    [],
  );

  useEffect(() => {
    debounceInputSearchProducts(inputValue);
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
