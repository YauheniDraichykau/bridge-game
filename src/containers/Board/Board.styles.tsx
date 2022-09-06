import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 10rem;
  background: ${({ theme }) => theme.board.colors.background};
`;

export const ButtonWrapper = styled.div`
  width: 10rem;
  display: flex;
  justify-content: center;
`;
