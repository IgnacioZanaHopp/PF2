// src/app/pages/alumnos/store/alumnos.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AlumnosActions from './app.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { AlumnosService } from '../alumnos.service';

@Injectable()
export class AlumnosEffects {

  loadAlumnos$ = createEffect(() => this.actions$.pipe(
    ofType(AlumnosActions.loadAlumnos),
    mergeMap(() =>
      this.alumnosService.getAlumnos().pipe(
        map(alumnos => AlumnosActions.loadAlumnosSuccess({ alumnos })),
        catchError(error => of(AlumnosActions.loadAlumnosFailure({ error })))
      )
    )
  ));

  createAlumno$ = createEffect(() => this.actions$.pipe(
    ofType(AlumnosActions.createAlumno),
    mergeMap(action =>
      this.alumnosService.createAlumno(action.alumno).pipe(
        map(alumno => AlumnosActions.createAlumnoSuccess({ alumno })),
        catchError(error => of(AlumnosActions.createAlumnoFailure({ error })))
      )
    )
  ));

  updateAlumno$ = createEffect(() => this.actions$.pipe(
    ofType(AlumnosActions.updateAlumno),
    mergeMap(action =>
      this.alumnosService.updateAlumno(action.alumno).pipe(
        map(alumno => AlumnosActions.updateAlumnoSuccess({ alumno })),
        catchError(error => of(AlumnosActions.updateAlumnoFailure({ error })))
      )
    )
  ));

  deleteAlumno$ = createEffect(() => this.actions$.pipe(
    ofType(AlumnosActions.deleteAlumno),
    mergeMap(action =>
      this.alumnosService.deleteAlumno(action.id).pipe(
        map(() => AlumnosActions.deleteAlumnoSuccess({ id: action.id })),
        catchError(error => of(AlumnosActions.deleteAlumnoFailure({ error })))
      )
    )
  ));

  constructor(
    private actions$: Actions,
    private alumnosService: AlumnosService
  ) {}
}
