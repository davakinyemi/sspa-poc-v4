import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: 'home',
    component: ListComponent
  },
  {
    path: 'home/detail',
    component: DetailComponent
  },
  {
    path: '**',
    component: EmptyRouteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
