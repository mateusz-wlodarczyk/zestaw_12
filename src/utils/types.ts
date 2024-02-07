export type BaseDish = {
  dishName: string;
  preparationTime: string;
};
export type NewObjPizza = BaseDish & {
  noOfSlices: number;
  diameter: number;
};

export type NewObjSoup = BaseDish & {
  spicinessScale: number;
};

export type NewObjSandwich = BaseDish & {
  slicesOfBread: number;
};

export type DishType = { index: number; value: string; text: string };
