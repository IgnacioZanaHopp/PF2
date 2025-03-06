import { createReducer, on } from '@ngrx/store';
import * as AlumnosActions from './alumnos.actions';
import { Alumno } from '../models/alumno.model';

export interface AlumnosState {
  alumnos: Alumno[];
  loading: boolean;
  error: any;
}

export const initialState: AlumnosState = {
  alumnos: [],
  loading: false,
  error: null
};

export const alumnosReducer = createReducer(
  initialState,
  on(AlumnosActions.cargarAlumnos, state => ({ ...state, loading: true })),
  on(AlumnosActions.cargarAlumnosSuccess, (state, { alumnos }) => ({
    ...state,
    loading: false,
    alumnos
  })),
  on(AlumnosActions.cargarAlumnosError, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);
