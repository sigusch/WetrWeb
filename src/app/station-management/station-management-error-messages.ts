export class ErrorMessage {
    constructor(
      public forControl: string,
      public forValidator: string,
      public text: string
    ) { }
  }
  
export const StationManagementErrorMessages = [
    new ErrorMessage('StationName', 'required', 'Ein Stationsname muss angegeben werden'),
];

