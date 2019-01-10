/* tslint:disable */
export class Measurement {
  constructor (
  public Id?: number,
  public StationId?: number,
  public DateTime?: string,
  public Temperature?: number,
  public Pressure?: number,
  public Rainfall?: number,
  public Moisture?: number,
  public Velocity?: number,
  public Direction?: number,
  ) {}
}
