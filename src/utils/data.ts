import { boolean } from 'yup';

export const dishType = [
  { index: 1, value: 'pizza', text: 'pizza' },
  { index: 2, value: 'soup', text: 'soup' },
  { index: 3, value: 'sandwich', text: 'sandwich' },
];

//usunac
// export type InputSelectData = {
//   id: number;
//   accessor: string;
//   type: string;
//   text: string;
//   valueAsString: boolean;
//   min: string | number;
//   max: string | number;
//   step: string | number;
// }[];

// export const inputSelectData = [
//   {
//     id: 1,
//     accessor: 'dishName',
//     type: 'text',
//     text: 'dish name',
//     valueAsString: true,
//     min: 'false',
//     max: 'false',
//     step: 'false',
//   },
//   {
//     id: 2,
//     accessor: 'preparationTime',
//     type: 'text',
//     text: 'preparation time',
//     valueAsString: true,
//     min: 1,
//     max: 'false',
//     step: 'false',
//   },
//   {
//     id: 3,
//     accessor: 'noOfSlices',
//     type: 'number',
//     text: 'select number of slices',
//     valueAsString: true,
//     min: 1,
//     max: 'false',
//     step: 1,
//   },
//   {
//     id: 4,
//     accessor: 'diameter',
//     type: 'text',
//     text: 'write diameter',
//     valueAsString: false,
//     min: 1,
//     max: 'false',
//     step: 'false',
//   },
//   {
//     id: 5,
//     accessor: 'spicinessScale',
//     type: 'number',
//     text: 'write spiciness scale',
//     valueAsString: true,
//     min: 1,
//     max: 10,
//     step: 1,
//   },
//   {
//     id: 6,
//     accessor: 'slicesOfBread',
//     type: 'number',
//     text: 'write number slices of bread',
//     valueAsString: true,
//     min: 1,
//     max: 'false',
//     step: 1,
//   },
// ];
