import React, { memo } from 'react';

import TextField, { BaseTextFieldProps } from '@mui/material/TextField';

import { FieldProps, getIn } from 'formik';

type TextFieldProps = Omit<BaseTextFieldProps, 'ref'>;

interface IProps extends Omit<FieldProps, 'meta' | 'field'>, TextFieldProps {}

const InputField: React.FC<IProps> = ({ form, name, ...props }) => {
  const field = form.getFieldProps(name);

  const { value } = field;
  const errorText =
    !!(form.touched[field.name] && form.errors[field.name]) &&
    getIn(form.errors, field.name);

  return (
    <TextField
      fullWidth
      helperText={errorText || null}
      error={!!errorText}
      name={name}
      id={name}
      value={value}
      onChange={form.handleChange}
      onBlur={form.handleBlur}
      {...props}
    />
  );
};

export default memo(InputField);
