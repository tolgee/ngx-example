import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NgxTolgeeModule } from "@tolgee/ngx";
import { UI } from "@tolgee/ui";
import { environment } from "../environments/environment";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxTolgeeModule.forRoot({
      apiUrl: environment.tolgeeApiUrl,
      apiKey: environment.tolgeeApiKey,
      ui: environment.tolgeeApiKey && UI,
    }),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
