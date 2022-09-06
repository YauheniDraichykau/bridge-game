import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  width: 100%;
  padding: 1rem 2rem;
  box-sizing: border-box;
  background: ${({ theme }) => theme.header.colors.background};
  color: ${({ theme }) => theme.header.colors.text};
`;

export const GameTitle = styled.div``;

export const AuthBtnWrapper = styled.div``;
