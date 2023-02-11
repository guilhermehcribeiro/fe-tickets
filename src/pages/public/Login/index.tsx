import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

import InputField from '../../../components/FormFields/Input';

import validationSchema from './validation';
import * as Styles from './styles';
import authService from '../../../services/auth';
import Toast from '../../../components/Toast';
import { encryptPassword } from '../../../helpers/encrypt';
import { getCookie } from '../../../helpers/cookie';

const Login = () => {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      try {
        setSubmitting(true);

        const copyData = {
          ...values,
          password: encryptPassword(values?.password),
        };

        await authService.loginUser(copyData);
        navigate('/dashboard');
      } catch (error: any) {
        Toast.error('Login inválido. Tente novamente');
      } finally {
        setSubmitting(false);
      }
    },
    validationSchema,
    validateOnMount: true,
  });

  if (getCookie('tickets_token')) return <Navigate to='/dashboard' />;

  return (
    <Styles.WrapperContainer>
      <form onSubmit={formik.handleSubmit}>
        <Styles.WrapperForm>
          <InputField
            name='email'
            type='email'
            label='E-mail'
            variant='outlined'
            autoComplete='off'
            form={formik}
          />
          <InputField
            name='password'
            type='password'
            label='Senha'
            variant='outlined'
            autoComplete='new-password'
            form={formik}
          />
          <Button
            type='submit'
            variant='contained'
            disabled={!formik?.isValid || submitting}
            startIcon={submitting && <CircularProgress size={18} />}
            style={{ height: '50px' }}
          >
            Entrar
          </Button>
        </Styles.WrapperForm>
      </form>

      <Styles.RegisterTypography>
        <Link to='register'>Crie uma conta</Link>
      </Styles.RegisterTypography>
    </Styles.WrapperContainer>
  );
};

export default Login;
