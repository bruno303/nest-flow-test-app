export enum ProductType {
  CAR = 'CAR',
  HOUSE = 'HOUSE',
  SUPPLIES = 'SUPPLIES',
}

export function valueOf(value: string): ProductType {
  const type = ProductType[value];
  if (type == null) {
    throw new Error(`Product type '${value}' not found`);
  }
  return type;
}
