import { FormControl, FormLabel, Select } from '@chakra-ui/react';
import { FormikProps } from 'formik';
import { DishType } from '../utils/types';
import FormHelperTextCustom from './FormHelperTextCustom';

export const SingleSelectInput = <T,>({
  accessor,
  formik,
  text,
  options,
}: {
  accessor: keyof T & string;
  formik: FormikProps<T>;
  text: string;
  options: DishType[];
}) => {
  return (
    <FormControl>
      <FormLabel>{text}</FormLabel>
      <Select
        onChange={formik.handleChange}
        value={formik.values[accessor] as string}
        name={accessor}
      >
        {options.map((el) => {
          return (
            <option key={el.index} value={el.value}>
              {el.text}
            </option>
          );
        })}
      </Select>
      <FormHelperTextCustom formik={formik} accessor={accessor} />
    </FormControl>
  );
};
