import { ImgHTMLAttributes } from 'react';

interface ISpecs {
  type: string;
  drive: string;
  gearbox: string;
  fuel: string;
  volume: string;
  mileage: string;
}

export interface ICarCard {
  image: ImgHTMLAttributes<HTMLImageElement>;
  make: string;
  model: string;
  year: number;
  specs: ISpecs;
  price: string;
  location: string;
}
