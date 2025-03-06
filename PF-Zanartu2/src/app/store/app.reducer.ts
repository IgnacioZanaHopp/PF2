// src/app/store/app.reducer.ts
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { AppState } from './app.state';

// Ejemplo si quisieras importar un reducer de 'alumnos'
// import { alumnosReducer, AlumnosState } from '../pages/alumnos/store/alumnos.reducer';

export const reducers: ActionReducerMap<AppState> = {
  // alumnos: alumnosReducer, // cuando esté listo el feature
};

export const metaReducers: MetaReducer<AppState>[] = [];
