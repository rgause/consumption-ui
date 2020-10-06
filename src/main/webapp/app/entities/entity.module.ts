import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'persona',
        loadChildren: () => import('./persona/persona.module').then(m => m.ConsumptionUiPersonaModule),
      },
      {
        path: 'report',
        loadChildren: () => import('./report/report.module').then(m => m.ConsumptionUiReportModule),
      },
      {
        path: 'report-parameter',
        loadChildren: () => import('./report-parameter/report-parameter.module').then(m => m.ConsumptionUiReportParameterModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class ConsumptionUiEntityModule {}
