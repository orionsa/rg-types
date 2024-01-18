export interface ICoordinate {
  x: number;
  y: number;
}

export type TSize = 1 | 2 | 3 | 4;

export interface IShipCoordinate extends ICoordinate {
  isHit: boolean;
}

export type TDirection = 'vertical' | 'horizontal';

export interface IShip {
  id: string;
  size: TSize;
  direction: TDirection | null;
  coordinates: IShipCoordinate[];
  startCoordinate: ICoordinate;
  isPositioned: boolean;
}

export interface IFleet {
  id: string,
  ships: IShip[]
}