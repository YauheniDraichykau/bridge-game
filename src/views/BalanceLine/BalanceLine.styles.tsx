import styled from 'styled-components';

export const Container = styled.div`
  height: 4rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.balanceLine.colors.background};
  color: ${({ theme }) => theme.balanceLine.colors.text};
  font-size: 1.1rem;
`;
