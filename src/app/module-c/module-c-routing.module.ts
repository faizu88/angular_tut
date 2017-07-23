import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ModuleCComponent} from "./module-c.component";
import {ModuleCSubAComponent} from "./module-c-sub-a/module-c-sub-a.component";
import {ModuleCSubBComponent} from "./module-c-sub-b/module-c-sub-b.component";

const routes: Routes = [
  {path: '', redirectTo: 'module-c-sub', pathMatch: 'full'},
  {
    path: 'module-c-sub',
    component: ModuleCComponent,
    children: [
      {
        path: 'module-c-sub-a',
        component: ModuleCSubAComponent
      },
      {
        path: 'module-c-sub-b',
        component: ModuleCSubBComponent,
        outlet: 'module-c-router-b'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleCRoutingModule {
}
