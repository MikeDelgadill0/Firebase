import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "gdi-places-app-478d2", appId: "1:403160333201:web:f0885131f7edbb8385f830", storageBucket: "gdi-places-app-478d2.firebasestorage.app", apiKey: "AIzaSyBAaSVbOTbCGtcRntVEG45iN-HMP35INW4", authDomain: "gdi-places-app-478d2.firebaseapp.com", messagingSenderId: "403160333201" })), provideFirestore(() => getFirestore())]
};
