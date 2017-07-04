import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}   from '@angular/forms';
import {ModuleBRoutingModule} from './module-b-routing.module';
import {ModuleBComponent} from './module-b.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ModuleBRoutingModule
  ],
  declarations: [
    ModuleBComponent
  ]
})

export class ModuleBModule {
}
