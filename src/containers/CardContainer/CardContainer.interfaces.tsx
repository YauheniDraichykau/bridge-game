import { Card } from '../../types/types';

export interface CardContainerProps {
  type: 'left' | 'right';
  card: Card;
}

export interface StyledCardContainerProps {
  type: 'left' | 'right';
}
