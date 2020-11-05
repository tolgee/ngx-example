import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgxPolygloatModule} from "ngx-polygloat";
import {UI} from "polygloat/ui";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgxPolygloatModule.forRoot({
      apiUrl: "https://app.polygloat.io",
      apiKey: "ducps94vv7d5pabaibldv2dla4",
      ui: UI
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
