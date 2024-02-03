import { FormControl, FormHelperText, FormLabel, Input, Select } from '@chakra-ui/react';
import { FormikProps } from 'formik';
import { DishType } from '../utils/types';

export const SingleSelectInput = <T,>({
  accessor,
  formik,
  text,
  arrayValue,
}: {
  accessor: keyof T & string;
  formik: FormikProps<T>;
  text: string;
  arrayValue: DishType[];
}) => {
  return (
    <FormControl>
      <FormLabel>{text}</FormLabel>
      <Select
        onChange={formik.handleChange}
        value={formik.values[accessor] as string}
        name={accessor}
      >
        {arrayValue.map((el) => {
          return (
            <option key={el.index} value={el.value}>
              {el.text}
            </option>
          );
        })}
      </Select>
      <FormHelperText>
        {formik.touched[accessor] && formik.errors[accessor]
          ? (formik.errors[accessor] as string) || ''
          : ''}
      </FormHelperText>
    </FormControl>
  );
};
