export class ErrorMessage {
    constructor(
      public forControl: string,
      public forValidator: string,
      public text: string
    ) { }
  }
  
export const MeasurementManagementErrorMessages = [
    new ErrorMessage('StationId', 'required', 'Ein Station muss angegeben werden'),
    new ErrorMessage('DateTime', 'required', 'Ein Zeitstempel muss angegeben werden'),
    new ErrorMessage('Temperature', 'required', 'Temperatur muss angegeben werden'),
    new ErrorMessage('Pressure', 'required', 'Luftdruck muss angegeben werden'),
    new ErrorMessage('Rainfall', 'required', 'Regenmenge muss angegeben werden'),
    new ErrorMessage('Moisture', 'required', 'Luftfeuchtigkeit muss angegeben werden'),
    new ErrorMessage('Velocity', 'required', 'Windgeschwindigkeit muss angegeben werden'),
    new ErrorMessage('Direction', 'required', 'Windrichtung muss angegeben werden')
];