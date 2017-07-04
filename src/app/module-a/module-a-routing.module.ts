import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ModuleAComponent} from './module-a.component';

const routeObj: Routes = [
  {path: 'module-a', component: ModuleAComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routeObj)
  ],
  exports: [RouterModule]
})

export class ModuleARoutingModule {

}


