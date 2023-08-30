import React from 'react';
import styled from 'styled-components';

import error from '../../assets/error.png';

const StyledNotFound = styled.div`
  position: relative;
  text-align: center;
  padding: 3rem;
`;
export const NotFound = () => {
  return (
    <StyledNotFound>
      <div>
        <h3>Ошибка 404. Страница не найдена :(</h3>
      </div>
      <div>
        <p>Error 404. Page not found</p>
      </div>
      <img src={error} alt='error' width='400px' className='p-1' />
    </StyledNotFound>
  );
};
