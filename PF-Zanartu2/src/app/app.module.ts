import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app.component';
// Ajusta esta ruta según dónde tengas tu AppComponent

// Store NgRx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from './store/app.reducer';

// Rutas
import { appRoutes } from './app.routes';
// Ajusta según el nombre de tu archivo de rutas

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),  // Si estás usando un archivo app.routes.ts
        StoreModule.forRoot(reducers, { metaReducers }),
        EffectsModule.forRoot([]),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: false }) // Ajusta si quieres
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
