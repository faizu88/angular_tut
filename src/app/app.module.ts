import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule}   from '@angular/forms';
import {AppComponent} from './app.component';
import {AppDirective} from './app.directive';
import {ApiService} from './api.service';
import {HttpModule, JsonpModule} from '@angular/http';
import {Routes, RouterModule} from "@angular/router";
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';


const mainRoutes: Routes = [
  /*{path: 'link1', component: AppComponent},
  {path: '**', component: PageNotFoundComponent}*/
]


@NgModule({
  declarations: [
    AppComponent,
    AppDirective,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(mainRoutes)
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
