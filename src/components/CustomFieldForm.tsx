import React, { useState } from 'react';
import { initialValuesFormik, FormValues, yupSchemaCustomForm } from '../utils/yupSchema';
import { useFormik } from 'formik';
import { Box, Button } from '@chakra-ui/react';
import { sendObj } from '../utils/fetchSupabase';
import { SingleInputField } from './SingleInputField';
import { createObject } from '../utils/functions';
import { SingleSelectInput } from './SingleSelectInput';
import { dishType } from '../utils/data';

// (fields depending on the dish type should be required conditionally based on what type of dish is selected).
// ma to tutaj sens jak ustawilem wartosci startowe w initialState?? to tez ulatwia walidacje i jupscheme

// w teorii jak takie warunkowe wyświetlanie powinno wyglądać, gdyby initialState były puste i required we wszystkich oknach?

export default function CustomFieldForm() {
  const [iSsend, setIsSend] = useState(false);
  const [isValidState, setIsValidState] = useState({ value: 'isLoading' });
  const formik = useFormik<FormValues>({
    enableReinitialize: true,
    initialValues: initialValuesFormik,

    onSubmit: () => {
      setIsSend(true);
      const newObj = createObject(formik.values);
      const dataToServer = JSON.stringify(newObj);

      sendObj(dataToServer).then((res) => setIsValidState(res));
    },
    validationSchema: yupSchemaCustomForm,
  });

  return (
    <Box sx={{ margin: '35px' }}>
      <form onSubmit={formik.handleSubmit}>
        <SingleInputField<FormValues>
          accessor='dishName'
          formik={formik}
          type={'text'}
          min={'false'}
          step={'false'}
          text={'dish name'}
          valueAsString={true}
          max={'false'}
        />

        <SingleInputField<FormValues>
          accessor='preparationTime'
          formik={formik}
          type={'text'}
          min={1}
          step={1}
          text={'preparation time'}
          max={'false'}
          valueAsString={true}
        />

        <SingleSelectInput
          accessor={'dishType'}
          formik={formik}
          text={'dish type:'}
          arrayValue={dishType}
        />
        {formik.values.dishType === 'pizza' && (
          <>
            <p>PIZZA</p>
            <SingleInputField<FormValues>
              accessor='noOfSlices'
              formik={formik}
              type={'number'}
              min={1}
              step={1}
              text={'select number of slices'}
              valueAsString={true}
              max={'false'}
            />
            <SingleInputField<FormValues>
              accessor='diameter'
              formik={formik}
              type={'text'}
              min={1}
              step={'false'}
              text={'write diameter'}
              valueAsString={false}
              max={'false'}
            />
          </>
        )}
        {formik.values.dishType === 'soup' && (
          <>
            <p>SOUP</p>
            <SingleInputField<FormValues>
              accessor='spicinessScale'
              formik={formik}
              type={'number'}
              min={1}
              step={1}
              text={'write spiciness scale'}
              valueAsString={false}
              max={10}
            />
          </>
        )}
        {formik.values.dishType === 'sandwich' && (
          <>
            <p>SANDWICH</p>
            <SingleInputField<FormValues>
              accessor='slicesOfBread'
              formik={formik}
              type={'number'}
              min={1}
              step={1}
              text={'write number slices of bread'}
              valueAsString={false}
              max={'false'}
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
