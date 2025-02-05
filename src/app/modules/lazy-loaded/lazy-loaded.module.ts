import { NgModule } from '@angular/core';
import { LazyLoadedComponent } from '../../components/lazy-loaded/lazy-loaded.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: LazyLoadedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class LazyLoadedModule { }
