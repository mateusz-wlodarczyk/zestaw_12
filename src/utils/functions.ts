import { NewObjPizza, NewObjSandwich, NewObjSoup } from './types';
import { FormValues } from './yupSchema';

export const buildPayload = (obj: FormValues) => {
  const baseData = {
    dishName: obj.dishName,
    preparationTime: obj.preparationTime,
  };

  if (obj.dishType === 'pizza') {
    return {
      ...baseData,
      noOfSlices: obj.noOfSlices,
      diameter: obj.diameter,
    } as NewObjPizza;
  }
  if (obj.dishType === 'soup') {
    return {
      ...baseData,
      dishName: obj.dishName,
      preparationTime: obj.preparationTime,
      spicinessScale: obj.spicinessScale,
    } as NewObjSoup;
  }
  if (obj.dishType === 'sandwich') {
    return {
      ...baseData,
      dishName: obj.dishName,
      preparationTime: obj.preparationTime,
      slicesOfBread: obj.slicesOfBread,
    } as NewObjSandwich;
  }
};
