// src/app/pages/alumnos/store/alumnos.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AlumnosState } from './app.reducer';

export const selectAlumnosState = createFeatureSelector<AlumnosState>('alumnos');

export const selectAllAlumnos = createSelector(
  selectAlumnosState,
  (state: AlumnosState) => state.alumnos
);

export const selectAlumnosLoading = createSelector(
  selectAlumnosState,
  (state: AlumnosState) => state.loading
);

export const selectAlumnosError = createSelector(
  selectAlumnosState,
  (state: AlumnosState) => state.error
);
