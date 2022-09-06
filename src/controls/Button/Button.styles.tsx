import styled from 'styled-components';
import { ButtonProps } from './Button.interfaces';

export const StyledButton = styled.button<ButtonProps>`
  height: ${({ theme, sizeButton = 'medium' }): string =>
    theme.button.sizes[sizeButton]};
  background: ${({ theme, viewType }): string =>
    theme.button.colors[viewType].background};
  border-color: ${({ theme, viewType }): string =>
    theme.button.colors[viewType].border};
  color: ${({ theme, viewType }): string => theme.button.colors[viewType].text};
  padding: 10px;
  border-radius: 8px;
  font-size: 18px;
  text-transform: capitalize;
  cursor: pointer;

  &&:hover {
    background: ${({ theme, viewType }): string =>
      theme.button.colors[viewType].backgroundHover};
    border-color: ${({ theme, viewType }): string =>
      theme.button.colors[viewType].borderHover};
    color: ${({ theme, viewType }): string =>
      theme.button.colors[viewType].textHover};
  }
`;
