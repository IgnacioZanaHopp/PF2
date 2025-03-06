import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosRoutingModule } from './alumnos-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { alumnosReducer } from '../alumnnos/store/app.reducer';
import { AlumnosEffects } from './store/alumnos.effects';
import { AlumnosComponent } from '../alumnnos/alumnos.component';
import { MaterialModule } from '../../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // ...
  ],
  // ...
})
export class AlumnosModule {}


@NgModule({
  declarations: [
    AlumnosComponent,
    AlumnoFormDialogComponent
  ],
  imports: [
    // ...
  ]
})
export class AlumnosModule {}


@NgModule({
  declarations: [
    AlumnosComponent
    // Aquí irían más componentes si tienes ABM, etc.
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    AlumnosRoutingModule,
    // Se registra el feature store con el nombre 'alumnos'
    StoreModule.forFeature('alumnos', alumnosReducer),
    EffectsModule.forFeature([AlumnosEffects]),
  ]
})
export class AlumnosModule { }
