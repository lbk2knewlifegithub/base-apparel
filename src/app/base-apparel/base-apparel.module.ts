import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BaseApparelRoutingModule } from './base-apparel-routing.module';
import { EmailFormComponent } from './components/email-form/email-form.component';
import { BaseApparelPageComponent } from './containers';

const COMPONENTS = [EmailFormComponent];
const CONTAINERS = [BaseApparelPageComponent];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BaseApparelRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [COMPONENTS, CONTAINERS],
})
export class BaseApparelModule {}
