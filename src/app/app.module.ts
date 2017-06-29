import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule}   from '@angular/forms';
import {AppComponent} from './app.component';
import {AppDirective} from './app.directive';
import {ApiService} from './api.service';
import {HttpModule} from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    AppDirective
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
