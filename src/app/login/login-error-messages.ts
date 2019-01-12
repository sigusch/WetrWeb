export class ErrorMessage {
    constructor(
      public forControl: string,
      public forValidator: string,
      public text: string
    ) { }
  }
  
export const LoginErrorMessages = [
    new ErrorMessage('Username', 'required', 'Benutzername muss angegeben werden'),
    new ErrorMessage('Password', 'required', 'Passwort muss angegeben werden'),
];