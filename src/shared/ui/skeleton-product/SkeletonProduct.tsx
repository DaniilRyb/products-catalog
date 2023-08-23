import React from 'react';
import styled from 'styled-components';

const SkeletonProductStyle = styled.div`
  opacity: 0.7;
  animation: skeleton-loading 1s linear infinite alternate;
  width: 400px;
  height: 400px;
  border-radius: 10px;

  @keyframes skeleton-loading {
    0% {
      background-color: hsl(207, 11%, 83%);
    }

    100% {
      background-color: hsl(200, 20%, 95%);
    }
  }
`;

export const SkeletonProduct = () => {
  return (
    <>
      <SkeletonProductStyle />
      <SkeletonProductStyle />
      <SkeletonProductStyle />
    </>
  );
};
