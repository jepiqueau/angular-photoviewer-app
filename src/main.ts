import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { defineCustomElements as jeepPhotoviewer} from 'jeep-photoviewer/loader';
import { defineCustomElements as pwaElements} from '@ionic/pwa-elements/loader';

if (environment.production) {
  enableProdMode();
}
jeepPhotoviewer(window);
pwaElements(window);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
