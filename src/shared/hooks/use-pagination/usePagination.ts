import { useEffect, useState } from 'react';

export const usePagination = ({ callback }) => {
  const [limit, setLimit] = useState(12);
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    callback({ limit, skip });
  }, [limit, skip, callback]);

  return { limit, skip, setLimit, setOffset: setSkip };
};
