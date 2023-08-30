import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../../store/typeHooks';
import { getProductsPaginationSliceAction } from '../../../features/pagination/api/getProductsPaginationSliceAction';

export const useProductsPagination = (limit: number, skip: number) => {
  const dispatch = useAppDispatch();
  const dispatchPaginationProducts = ({
    limit,
    skip,
  }: {
    limit: number;
    skip: number;
  }) => {
    dispatch(getProductsPaginationSliceAction({ limit, skip }));
  };
  useEffect(() => {
    dispatchPaginationProducts({ limit, skip });
  }, [limit, skip]);

  const { data, status, error } = useAppSelector(
    (state) => state.productsPagination,
  );

  return {
    data,
    status,
    error,
    dispatchPaginationProducts,
  };
};
