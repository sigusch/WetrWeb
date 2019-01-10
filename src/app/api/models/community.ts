/* tslint:disable */
import { District } from './district';
export interface Community {
  Id: number;
  District?: District;
  Name?: string;
  Zip: number;
}
