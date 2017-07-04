import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import {Routes, RouterModule} from "@angular/router";
import {ModuleAModule} from './module-a/module-a.module';
import {ModuleBModule} from './module-b/module-b.module';

import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

import {AppDirective} from './app.directive';
import {ApiService} from './api.service';

const mainRoutes: Routes = [
  {path: '', redirectTo: '/module-a', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    ModuleAModule,
    ModuleBModule,
    RouterModule.forRoot(mainRoutes)
  ],
  declarations: [
    AppComponent,
    AppDirective,
    PageNotFoundComponent
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
