import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule}   from '@angular/forms';
import {ModuleARoutingModule} from './module-a-routing.module';
import {ModuleAComponent} from './module-a.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ModuleARoutingModule
  ],
  declarations: [
    ModuleAComponent
  ]
})

export class ModuleAModule {}
