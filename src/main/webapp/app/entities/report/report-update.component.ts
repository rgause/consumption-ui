import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IReport, Report } from 'app/shared/model/report.model';
import { ReportService } from './report.service';
import { IPersona } from 'app/shared/model/persona.model';
import { PersonaService } from 'app/entities/persona/persona.service';

@Component({
  selector: 'jhi-report-update',
  templateUrl: './report-update.component.html',
})
export class ReportUpdateComponent implements OnInit {
  isSaving = false;
  personas: IPersona[] = [];

  editForm = this.fb.group({
    id: [],
    reportName: [null, []],
    persona: [],
  });

  constructor(
    protected reportService: ReportService,
    protected personaService: PersonaService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ report }) => {
      this.updateForm(report);

      this.personaService.query().subscribe((res: HttpResponse<IPersona[]>) => (this.personas = res.body || []));
    });
  }

  updateForm(report: IReport): void {
    this.editForm.patchValue({
      id: report.id,
      reportName: report.reportName,
      persona: report.persona,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const report = this.createFromForm();
    if (report.id !== undefined) {
      this.subscribeToSaveResponse(this.reportService.update(report));
    } else {
      this.subscribeToSaveResponse(this.reportService.create(report));
    }
  }

  private createFromForm(): IReport {
    return {
      ...new Report(),
      id: this.editForm.get(['id'])!.value,
      reportName: this.editForm.get(['reportName'])!.value,
      persona: this.editForm.get(['persona'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IReport>>): void {
    result.subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError(): void {
    this.isSaving = false;
  }

  trackById(index: number, item: IPersona): any {
    return item.id;
  }
}
