import { enableProdMode, importProvidersFrom } from '@angular/core';
import { environment } from './environments/environment';
import { TOLGEE_INSTANCE, Tolgee, DevTools, NgxTolgeeModule } from '@tolgee/ngx';
import { FormatIcu } from '@tolgee/format-icu';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app/app.component';

if (environment.production) {
  enableProdMode();
}

function bootstrap() {
  bootstrapApplication(AppComponent, {
    providers: [
      importProvidersFrom(AppRoutingModule, BrowserModule, NgxTolgeeModule, FormsModule, CommonModule),
      {
        provide: TOLGEE_INSTANCE,
        useFactory: () => {
          return Tolgee()
            .use(FormatIcu())
            .use(DevTools())
            .init({
              availableLanguages: ['en', 'cs', 'fr', 'de'],
              staticData: {
                'en:namespaced': () => import("./i18n/namespaced/en.json"),
                'cs:namespaced': () => import("./i18n/namespaced/cs.json"),
                'de:namespaced': () => import("./i18n/namespaced/de.json"),
                'fr:namespaced': () => import("./i18n/namespaced/fr.json"),
                en: () => import("./i18n/en.json"),
                cs: () => import("./i18n/cs.json"),
                de: () => import("./i18n/de.json"),
                fr: () => import("./i18n/fr.json"),
              },
              apiUrl: environment.tolgeeApiUrl,
              apiKey: environment.tolgeeApiKey,
              fallbackLanguage: 'en',
              defaultLanguage: 'en',
            });
        },
      }
    ]
  })
    // eslint-disable-next-line no-console
    .catch((err) => console.error(err));
}

if (document.readyState === 'complete') {
  bootstrap();
} else {
  document.addEventListener('DOMContentLoaded', bootstrap);
}
