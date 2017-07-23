import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleCRoutingModule } from './module-c-routing.module';
import { ModuleCComponent } from './module-c.component';
import { ModuleCSubAComponent } from './module-c-sub-a/module-c-sub-a.component';
import { ModuleCSubBComponent } from './module-c-sub-b/module-c-sub-b.component';
@NgModule({
  imports: [
    CommonModule,
    ModuleCRoutingModule
  ],
  declarations: [ModuleCComponent, ModuleCSubAComponent, ModuleCSubBComponent]
})
export class ModuleCModule { }
