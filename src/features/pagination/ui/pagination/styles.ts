import {
  FaCaretLeft,
  FaCaretRight,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1rem;
  padding: 0.3rem;
`;

const factory = (Component: any = FaChevronLeft) => styled(Component)`
  cursor: pointer;
`;

const Left = factory(FaChevronLeft);

const AllLeft = factory(FaCaretLeft);

const Right = factory(FaChevronRight);

const AllRight = factory(FaCaretRight);

const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
`;

const Page = factory(styled.div<{ isActive?: boolean }>`
  padding: 0.5rem;
  margin: 0.25rem;
  background-color: #ccc;
  color: #000;
  border-radius: 3px;
  font-size: 1.25rem;
  font-weight: ${({ isActive }) => isActive && 'bold'};

  &:hover {
    background-color: #3d6fb0;
    color: #fff;
    transition:
      background-color,
      color 0.25s;
    font-weight: ${({ isActive }) => isActive && 'bold'};
  }
`);

const PageInfo = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr;
  grid-gap: 0.4rem;
  align-items: center;
  text-transform: uppercase;
`;

export {
  Container,
  Left,
  AllLeft,
  PageContainer,
  Page,
  AllRight,
  Right,
  PageInfo,
};
