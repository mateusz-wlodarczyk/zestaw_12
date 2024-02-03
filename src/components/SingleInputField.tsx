import { FormControl, FormHelperText, FormLabel, Input } from '@chakra-ui/react';
import { FormikProps } from 'formik';

export const SingleInputField = <T,>({
  accessor,
  formik,
  type,
  min,
  max,
  step,
  text,
  valueAsString,
}: {
  accessor: keyof T & string;
  formik: FormikProps<T>;
  type: string;
  text: string;
  max: number | string;
  min: number | string;
  step: number | string;
  valueAsString: boolean;
}) => {
  const checkTypeOfValue = valueAsString ? 'string' : 3;

  return (
    <FormControl>
      <FormLabel>{text}</FormLabel>
      <Input
        id={accessor}
        name={accessor}
        type={type}
        value={formik.values[accessor] as typeof checkTypeOfValue}
        onChange={formik.handleChange}
        step={step}
        min={min}
        max={max}
      />
      <FormHelperText sx={{ color: 'red' }}>
        {formik.touched[accessor] && formik.errors[accessor]
          ? (formik.errors[accessor] as string) || ''
          : ''}
      </FormHelperText>
    </FormControl>
  );
};
