import React, { useState } from 'react';
import { initialValuesFormik, FormValues, yupSchemaCustomForm } from '../utils/yupSchema';
import { useFormik } from 'formik';
import { Box, Button } from '@chakra-ui/react';
import { sendObj } from '../utils/fetchSupabase';
import { SingleInputField } from './SingleInputField';
import { buildPayload } from '../utils/functions';
import { SingleSelectInput } from './SingleSelectInput';
import { dishType } from '../utils/data';

export default function CustomFieldForm() {
  const [iSsend, setIsSend] = useState(false);
  const [isValidState, setIsValidState] = useState({ value: 'isLoading' });
  const formik = useFormik<FormValues>({
    enableReinitialize: true,
    initialValues: initialValuesFormik,

    onSubmit: () => {
      console.log(formik);
      setIsSend(true);
      const newObj = buildPayload(formik.values);
      if (newObj !== undefined) sendObj(newObj).then((res) => setIsValidState(res));
    },

    validationSchema: yupSchemaCustomForm,
  });

  return (
    <Box sx={{ margin: '35px' }}>
      <form onSubmit={formik.handleSubmit}>
        <SingleInputField<FormValues>
          accessor='dishName'
          formik={formik}
          type='text'
          min='false'
          step='false'
          text='dish name'
          valueAsString={true}
          max='false'
        />

        <SingleInputField<FormValues>
          accessor='preparationTime'
          formik={formik}
          type='text'
          min={1}
          step={1}
          text='preparation time'
          max='false'
          valueAsString={true}
        />

        <SingleSelectInput
          accessor='dishType'
          formik={formik}
          text='dish type:'
          options={dishType}
        />
        {formik.values.dishType === dishType[0].value && (
          <>
            <p>PIZZA</p>
            <SingleInputField<FormValues>
              accessor='noOfSlices'
              formik={formik}
              type='number'
              min={1}
              step={1}
              text='select number of slices'
              valueAsString={true}
              max='false'
            />
            <SingleInputField<FormValues>
              accessor='diameter'
              formik={formik}
              type='text'
              min={1}
              step='false'
              text='write diameter'
              valueAsString={false}
              max='false'
            />
          </>
        )}
        {formik.values.dishType === dishType[1].value && (
          <>
            <p>SOUP</p>
            <SingleInputField<FormValues>
              accessor='spicinessScale'
              formik={formik}
              type='number'
              min={1}
              step={1}
              text='write spiciness scale'
              valueAsString={false}
              max={10}
            />
          </>
        )}
        {formik.values.dishType === dishType[2].value && (
          <>
            <p>SANDWICH</p>
            <SingleInputField<FormValues>
              accessor='slicesOfBread'
              formik={formik}
              type='number'
              min={1}
              step={1}
              text='write number slices of bread'
              valueAsString={false}
              max='false'
            />
          </>
        )}
        <Button type='submit'>submit</Button>
      </form>
      {iSsend && isValidState.value === 'isLoading' && <p>isLoading ok</p>}
      {iSsend && isValidState.value === 'data' && <p>everything ok</p>}
      {iSsend && isValidState.value === 'error' && <p>error, not ok</p>}
    </Box>
  );
}
