import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { SpaComponent } from './components/spa/spa.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SpaRoutingModule } from './spa-routing.module';

/**
 * Module that contains components we see all time when we are inside the application
 */
@NgModule({
  declarations: [SpaComponent, ToolbarComponent],
  imports: [
    CommonModule,
    SpaRoutingModule,
    SharedModule
  ]
})
export class SpaModule { }
