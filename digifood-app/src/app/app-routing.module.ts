import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from "./component/not-found/not-found.component";
import {ForbiddenComponent} from "./component/forbidden/forbidden.component";
import {MenuComponent} from "./menu/menu.component";

export const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    pathMatch: 'full'
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '403',
    component: ForbiddenComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
