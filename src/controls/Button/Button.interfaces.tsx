import { ReactNode, ButtonHTMLAttributes } from 'react';

export type ViewType = 'primary' | 'link';
export type Size = 'small' | 'medium' | 'large';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  viewType: ViewType;
  sizeButton?: Size;
  children?: ReactNode;
}
