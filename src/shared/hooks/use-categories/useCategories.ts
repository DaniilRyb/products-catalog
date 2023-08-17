import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/typeHooks';
import { getCategories } from '../../../store/slices/api/categories/getCategories';

export const useCategories = () => {
const dispatch = useAppDispatch()
  useEffect(() => {
dispatch(getCategories())
  }, [])
  return useAppSelector(state => state.categories)
}
