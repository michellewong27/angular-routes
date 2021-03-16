import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LazyComponent} from 'src/app/LazyModules/components/lazy/lazy.component';

const routes: Routes = [{ path: "", component: LazyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyModuleRoutingModule { }