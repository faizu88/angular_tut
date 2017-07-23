import {BrowserModule} from '@angular/platform-browser';
import {HttpModule, JsonpModule} from '@angular/http';
import {NgModule} from '@angular/core';
import {FormsModule}   from '@angular/forms';
import {Routes, RouterModule} from "@angular/router";
import {ModuleAModule} from './module-a/module-a.module';

import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

import {AppDirective} from './app.directive';
import {ApiService} from './api.service';


const mainRoutes: Routes = [
  {path: 'module-b', loadChildren: 'app/module-b/module-b.module#ModuleBModule'},
  {path: 'module-c', loadChildren: 'app/module-c/module-c.module#ModuleCModule'},
  {path: '', redirectTo: '/module-a', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    ModuleAModule, RouterModule.forRoot(mainRoutes, {useHash: true})
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
