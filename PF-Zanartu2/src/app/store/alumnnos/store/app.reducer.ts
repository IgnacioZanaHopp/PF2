// src/app/pages/alumnos/store/alumnos.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as AlumnosActions from './app.actions';
import { Alumno } from '../models/alumnos.models';

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

  // LOAD
  on(AlumnosActions.loadAlumnos, (state) => ({
    ...state,
    loading: true
  })),
  on(AlumnosActions.loadAlumnosSuccess, (state, { alumnos }) => ({
    ...state,
    loading: false,
    alumnos
  })),
  on(AlumnosActions.loadAlumnosFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),

  // CREATE
  on(AlumnosActions.createAlumno, (state) => ({
    ...state,
    loading: true
  })),
  on(AlumnosActions.createAlumnoSuccess, (state, { alumno }) => ({
    ...state,
    loading: false,
    alumnos: [...state.alumnos, alumno]
  })),
  on(AlumnosActions.createAlumnoFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),

  // UPDATE
  on(AlumnosActions.updateAlumno, (state) => ({
    ...state,
    loading: true
  })),
  on(AlumnosActions.updateAlumnoSuccess, (state, { alumno }) => ({
    ...state,
    loading: false,
    alumnos: state.alumnos.map(a => a.id === alumno.id ? alumno : a)
  })),
  on(AlumnosActions.updateAlumnoFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),

  // DELETE
  on(AlumnosActions.deleteAlumno, (state) => ({
    ...state,
    loading: true
  })),
  on(AlumnosActions.deleteAlumnoSuccess, (state, { id }) => ({
    ...state,
    loading: false,
    alumnos: state.alumnos.filter(a => a.id !== id)
  })),
  on(AlumnosActions.deleteAlumnoFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);
