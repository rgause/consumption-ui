import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { ConsumptionUiSharedModule } from 'app/shared/shared.module';
import { ConsumptionUiCoreModule } from 'app/core/core.module';
import { ConsumptionUiAppRoutingModule } from './app-routing.module';
import { ConsumptionUiHomeModule } from './home/home.module';
import { ConsumptionUiEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    ConsumptionUiSharedModule,
    ConsumptionUiCoreModule,
    ConsumptionUiHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    ConsumptionUiEntityModule,
    ConsumptionUiAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class ConsumptionUiAppModule {}
