import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 50rem;
`;

export const StyledInput = styled.input`
  height: 2.4rem;
  margin: 0.2rem 0;
  padding-left: 0.5rem;
  border-radius: 4px;
  font-size: 1.1rem;
`;

export const Error = styled.div`
  height: 3rem;
  font-size: 1.2rem;
  color: ${({ theme }): string => theme.loginForm.colors.textError};
`;
