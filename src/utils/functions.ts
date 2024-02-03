import { NewObjPizza, NewObjSandwich, NewObjSoup } from './types';
import { FormValues } from './yupSchema';

export const createObject = (obj: FormValues) => {
  let newObj;
  if (obj.dishType === 'pizza') {
    return (newObj = {
      dishName: obj.dishName,
      preparationTime: obj.preparationTime,
      noOfSlices: obj.noOfSlices,
      diameter: obj.diameter,
    } as NewObjPizza);
  }
  if (obj.dishType === 'soup') {
    return (newObj = {
      dishName: obj.dishName,
      preparationTime: obj.preparationTime,
      spicinessScale: obj.spicinessScale,
    } as NewObjSoup);
  }
  if (obj.dishType === 'sandwich') {
    return (newObj = {
      dishName: obj.dishName,
      preparationTime: obj.preparationTime,
      slicesOfBread: obj.slicesOfBread,
    } as NewObjSandwich);
  }
};
