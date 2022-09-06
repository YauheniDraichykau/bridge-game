import { FC, memo, ReactElement } from 'react';
import isEqual from 'lodash.isequal';
import * as S from './Button.styles';
import { ButtonProps } from './Button.interfaces';

export const ButtonComponent: FC<ButtonProps> = ({
  label,
  ...props
}: ButtonProps): ReactElement => (
  <S.StyledButton {...props}>{label}</S.StyledButton>
);

export const Button = memo(ButtonComponent, isEqual);
