import styled from 'styled-components';
import { StyledCardContainerProps } from './CardContainer.interfaces';

export const Container = styled.div<StyledCardContainerProps>`
  display: flex;
  flex-direction: ${({ type }) => type === 'right' && 'row-reverse'};
  align-items: center;
  width: 26rem;
  background: ${({ theme }) => theme.board.colors.background};
  box-sizing: border-box;
`;

export const ButtonWrapper = styled.div`
  padding: 0 2rem;
`;

export const CardWrapper = styled.button`
  border: none;
  outline: none;
  border-radius: 16px;
`;
