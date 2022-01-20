import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BaseApparelRoutingModule } from './base-apparel-routing.module';
import { EmailFormComponent } from './components';
import { BaseApparelPageComponent } from './containers';

const COMPONENTS = [EmailFormComponent];
const CONTAINERS = [BaseApparelPageComponent];

@NgModule({
  imports: [CommonModule, RouterModule, BaseApparelRoutingModule],
  declarations: [COMPONENTS, CONTAINERS],
})
export class BaseApparelModule {}
