import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/typeHooks';
import { getProductByIdAction } from '../../../entities/product/api/product/getProductByIdAction';
export const useProductById = (id: string | undefined) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (id) dispatch(getProductByIdAction(id));
  }, [id]);

  const { data, status, error } = useAppSelector((state) => state.productById);

  return {
    data,
    status,
    error,
  };
};
