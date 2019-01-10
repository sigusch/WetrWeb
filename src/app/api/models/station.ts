/* tslint:disable */
import { StationType } from './station-type';
import { Coordinate } from './coordinate';
import { Community } from './community';
import { User } from './user';
export class Station {
  constructor (
  public Id?: number,
  public Name?: string,
  public StationType?: StationType,
  public Coordinate?: Coordinate,
  public Street?: string,
  public Community?: Community,
  public User?: User,
  ) {}
}
