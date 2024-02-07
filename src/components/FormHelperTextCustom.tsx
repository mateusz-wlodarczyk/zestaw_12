import { FormHelperText } from '@chakra-ui/react';
import { FormikProps } from 'formik';
import React from 'react';

export default function FormHelperTextCustom<T>({
  formik,
  accessor,
}: {
  accessor: keyof T & string;
  formik: FormikProps<T>;
}) {
  return (
    <FormHelperText>
      {formik.touched[accessor] && formik.errors[accessor]
        ? (formik.errors[accessor] as string) || ''
        : ''}
    </FormHelperText>
  );
}
