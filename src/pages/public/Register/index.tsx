import { useState } from 'react';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { useFormik } from 'formik';

import InputField from '../../../components/FormFields/Input';
import Toast from '../../../components/Toast';

import userService from '../../../services/user';
import { IUserRegister } from '../../../inferface/user';
import { encryptPassword } from '../../../helpers/encrypt';
import validationSchema from './validation';
import * as Styles from './styles';
import { Navigate } from 'react-router-dom';
import { getCookie } from '../../../helpers/cookie';

const Register = () => {
  const [submitting, setSubmitting] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    } as IUserRegister,
    onSubmit: async (values, formikHelpers) => {
      try {
        setSubmitting(true);
        const copyData = {
          ...values,
          password: encryptPassword(values?.password),
        };
        delete copyData.confirmPassword;
        await userService.createUser(copyData);
        Toast.success('Usuário criado com sucesso!');
        formikHelpers.resetForm();
      } catch (error: any) {
        Toast.error(`Erro ao criar usuário! ${error?.response?.data?.message}`);
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
            name='name'
            type='name'
            label='Nome'
            variant='outlined'
            autoComplete='off'
            form={formik}
          />
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
          <InputField
            name='confirmPassword'
            type='password'
            label='Confirme a senha'
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
            Cadastrar
          </Button>
        </Styles.WrapperForm>
      </form>
    </Styles.WrapperContainer>
  );
};

export default Register;
