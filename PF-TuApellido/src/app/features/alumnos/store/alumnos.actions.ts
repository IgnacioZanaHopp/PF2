import { createAction, props } from '@ngrx/store';
import { Alumno } from '../models/alumno.model';

export const cargarAlumnos = createAction('[Alumnos] Cargar Alumnos');

export const cargarAlumnosSuccess = createAction(
  '[Alumnos] Cargar Alumnos Success',
  props<{ alumnos: Alumno[] }>()
);

export const cargarAlumnosError = createAction(
  '[Alumnos] Cargar Alumnos Error',
  props<{ error: any }>()
);
