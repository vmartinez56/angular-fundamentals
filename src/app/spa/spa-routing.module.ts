import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpaComponent } from './components/spa/spa.component';

const routes: Routes = [
  {
    path: '',
    component: SpaComponent,
    children: [
      {
        path: 'people',
        loadChildren: 'app/people/people.module#PeopleModule'
      },
      {
        path: '',
        redirectTo: 'people',
        pathMatch: 'full'
      },
    ]
  }
];

/**
 * Routing module of our Spa Module, it handles lazy loading to enter our People Module
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpaRoutingModule {}
