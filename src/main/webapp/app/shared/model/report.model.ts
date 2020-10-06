import { IPersona } from 'app/shared/model/persona.model';

export interface IReport {
  id?: number;
  reportName?: string;
  persona?: IPersona;
}

export class Report implements IReport {
  constructor(public id?: number, public reportName?: string, public persona?: IPersona) {}
}
