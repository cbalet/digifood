import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MenuComponent} from "./menu/menu.component";

export const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
