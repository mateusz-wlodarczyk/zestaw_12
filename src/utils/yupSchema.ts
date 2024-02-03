import * as yup from 'yup';

export const initialValuesFormik: FormValues = {
  dishName: '',
  preparationTime: '',
  dishType: 'pizza',
  noOfSlices: 1,
  diameter: 20,
  spicinessScale: 5,
  slicesOfBread: 10,
};

export const yupSchemaCustomForm = yup.object({
  dishName: yup.string().required('is required!'),
  preparationTime: yup
    .string()
    .matches(/[0-9]{2}:[0-9]{2}:[0-9]{2}/, 'please write the correct format: 00:00:00')
    .required('is required!'),
  dishType: yup.string().required('is required!'),
  noOfSlices: yup.number().required('is required!'),
  diameter: yup.number().required('is required!'),
  spicinessScale: yup.number().required('is required!'),
  slicesOfBread: yup.number().required('is required!'),
});

export type FormValues = yup.InferType<typeof yupSchemaCustomForm>;
