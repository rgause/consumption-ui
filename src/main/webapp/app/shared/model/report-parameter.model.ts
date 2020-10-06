import { IReport } from 'app/shared/model/report.model';

export interface IReportParameter {
  id?: number;
  parameterName?: string;
  report?: IReport;
}

export class ReportParameter implements IReportParameter {
  constructor(public id?: number, public parameterName?: string, public report?: IReport) {}
}
