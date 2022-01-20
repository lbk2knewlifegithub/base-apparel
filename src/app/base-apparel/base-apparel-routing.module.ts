import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseApparelPageComponent } from './containers';

const routes: Routes = [{ path: '', component: BaseApparelPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaseApparelRoutingModule {}
