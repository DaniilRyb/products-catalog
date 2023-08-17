import { useAppDispatch, useAppSelector } from '../../../store/typeHooks';
import { useEffect } from 'react';
import { getProducts } from '../../../store/slices/api/products/getProducts';

export const useProducts = (productName: string | undefined) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (productName) dispatch(getProducts(productName))
  }, [])

  const {data, error, status} = useAppSelector(state => state.products)
  return {
    data,
    error,
    status
  }
}
