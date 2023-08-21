import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/typeHooks';
import { getCategoriesAction } from '../../../store/slices/api/categories/getCategoriesAction';

export const useCategories = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log('useEffect useCategories work!');
    dispatch(getCategoriesAction());
  }, []);

  const { categories, status, error } = useAppSelector(
    (state) => state.categories,
  );
  return {
    categories,
    status,
    error,
  };
};
