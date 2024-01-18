interface ICoordinate {
    x: number;
    y: number;
}
type TSize = 1 | 2 | 3 | 4;
interface IShipCoordinate extends ICoordinate {
    isHit: boolean;
}
type TDirection = 'vertical' | 'horizontal';
interface IShip {
    id: string;
    size: TSize;
    direction: TDirection | null;
    coordinates: IShipCoordinate[];
    startCoordinate: ICoordinate;
    isPositioned: boolean;
}
interface IFleet {
    id: string;
    ships: IShip[];
}

export type { ICoordinate, IFleet, IShip, IShipCoordinate, TDirection, TSize };
