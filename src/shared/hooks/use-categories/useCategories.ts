import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/typeHooks';
import { getCategories } from '../../../store/slices/api/categories/getCategories';

export const useCategories = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  const { data, status, error } = useAppSelector((state) => state.categories);
  return {
    data,
    status,
    error,
  };
};
