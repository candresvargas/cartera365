import {
  ApplicationConfig,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';  // Asegúrate de tener las rutas configuradas

import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';

import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';  // Puedes cambiar esto a otro tema como 'Lara', 'Nora', etc.

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),  // Asegúrate de definir tus rutas en 'app.routes.ts'
    provideClientHydration(withEventReplay()),
    provideAnimations(),  // Habilitar animaciones en la app
    providePrimeNG({
      theme: {
        preset: Aura,               // Tema elegido (puedes cambiarlo a 'Lara', 'Nora', etc.)
        options: { darkModeSelector: '.dark' } // Opcional: habilitar el modo oscuro
      }
      // , ripple: true             // Opcional, si quieres habilitar los efectos de 'ripple'
    })
  ]
};
