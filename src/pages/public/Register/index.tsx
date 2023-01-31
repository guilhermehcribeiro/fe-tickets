import Button from '@mui/material/Button';
import InputField from '../../../components/FormFields/Input';

import { useFormik } from 'formik';

import validationSchema from './validation';
import * as Styles from './styles';

const Register = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema,
    validateOnMount: true,
  });

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
          <InputField
            name='confirmPassword'
            type='password'
            label='Confirme a senha'
            variant='outlined'
            autoComplete='new-password'
            form={formik}
          />
          <Button type='submit' variant='contained' disabled={!formik?.isValid}>
            Cadastrar
          </Button>
        </Styles.WrapperForm>
      </form>
    </Styles.WrapperContainer>
  );
};

export default Register;
