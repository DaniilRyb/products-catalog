import React, { FC } from 'react';
import styled from 'styled-components';

const ErrorFlex = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem;
`;

const ErrorStyle = styled.div`
  width: 700px;
  height: 75px;
  background-color: #eaa1a1;
  border-radius: 10px;
  padding: 2rem;
`;

type ErrorProps = {
  code: number;
  message: string;
  messageAxios: string;
};
export const Error: FC<ErrorProps> = ({ code, message, messageAxios }) => {
  return (
    <ErrorFlex>
      <ErrorStyle>
        <h1>
          {code} {message}
        </h1>
        <p>{messageAxios}</p>
      </ErrorStyle>
    </ErrorFlex>
  );
};
