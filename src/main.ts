import { platformBrowser } from '@angular/platform-browser';
<<<<<<< HEAD
import { AppModule } from './app/app-module';
=======
import { AppModule } from './app/app.module';
>>>>>>> f8b2a75 (Pipes)

platformBrowser().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true,
})
  .catch(err => console.error(err));
