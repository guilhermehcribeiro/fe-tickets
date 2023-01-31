import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string()
    .email()
    .nullable()
    .required('Por favor, preencha esse campo'),
  password: Yup.string()
    .nullable()
    .min(8)
    .required('Por favor, preencha esse campo'),
});

export default validationSchema;
