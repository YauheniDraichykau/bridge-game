import { memo, FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import isEqual from 'lodash.isequal';
import { StorageService } from '../../services/tokenStorage';
import { Button } from '../../controls/Button';
import * as S from './Login.styles';

type Inputs = {
  login: string;
  password: string;
};

export const LoginComponent: FC = () => {
  const navigate = useNavigate();
  const storageService = new StorageService();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = ({ login, password }) => {
    if (login === 'admin' && password === '123456') {
      storageService.setItem('isLogged', 'true');
      navigate('/');
    } else {
      setError('login', {
        message: 'Имя пользователя или пароль введены не верно',
      });
    }
  };

  return (
    <S.Container>
      <h1>Sign in to ypur account</h1>
      <S.StyledForm onSubmit={handleSubmit(onSubmit)}>
        <S.StyledInput
          {...register('login', { required: true })}
          placeholder='LOGIN'
        />
        <S.StyledInput
          {...register('password', { required: true })}
          placeholder='PASSWORD'
        />
        <S.Error>
          {(errors.login || errors.password) && (
            <span>{errors.login?.message}</span>
          )}
        </S.Error>
        <Button label='Login' type='submit' viewType='primary' />
      </S.StyledForm>
    </S.Container>
  );
};

export const Login = memo(LoginComponent, isEqual);
