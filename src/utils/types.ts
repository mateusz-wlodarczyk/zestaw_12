export type NewObjPizza = {
  dishName: string;
  preparationTime: string;
  noOfSlices: number;
  diameter: number;
};

export type NewObjSoup = {
  dishName: string;
  preparationTime: string;
  spicinessScale: number;
};

export type NewObjSandwich = {
  dishName: string;
  preparationTime: string;
  slicesOfBread: number;
};

export type DishType = { index: number; value: string; text: string };
