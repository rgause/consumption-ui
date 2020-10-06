export interface IPersona {
  id?: number;
  personaName?: string;
  securityGroupName?: string;
}

export class Persona implements IPersona {
  constructor(public id?: number, public personaName?: string, public securityGroupName?: string) {}
}
