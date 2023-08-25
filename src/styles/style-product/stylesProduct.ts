import styled from 'styled-components';

export const ProductStyles = styled.div`
  width: 400px;
  height: 400px;

  img {
    width: 400px;
    height: 400px;
    border-radius: 10px;
  }
`;

export const DescriptionStyles = styled.div`
  margin: 0;
  text-transform: uppercase;
  font-weight: bold;

  p {
    text-transform: none;
  }
`;

export const Price = styled.span`
  border-radius: 20%;
  color: #fff;
  padding: 0.75rem;
  background: linear-gradient(89.97deg, #11ce2f 2%, #f49867ff 100%);
`;
