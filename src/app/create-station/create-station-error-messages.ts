export class ErrorMessage {
    constructor(
      public forControl: string,
      public forValidator: string,
      public text: string
    ) { }
  }
  
export const CreateStationErrorMessages = [
    new ErrorMessage('StationName', 'required', 'Ein Stationsname muss angegeben werden'),
    new ErrorMessage('Community', 'required', 'Eine Gemeinde muss angegeben werden'),
    new ErrorMessage('Latitude', 'required', 'Ein Breitengrad muss angegeben werden'),
    new ErrorMessage('Longitude', 'required', 'Ein Längengrad muss angegeben werden')
];

