import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

export function getBaseUrl(){
  return "http://localhost:3000"
  
}
const providers=[
  {
    provide:"BaseUrl",useFactory:getBaseUrl,deps:[]
  }
]
platformBrowserDynamic(providers).bootstrapModule(AppModule)
  .catch(err => console.error(err));
