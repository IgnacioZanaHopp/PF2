import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as AlumnosActions from './alumnos.actions';
import { AlumnosService } from '../services/alumnos.service';

@Injectable()
export class AlumnosEffects {
    cargarAlumnos$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AlumnosActions.cargarAlumnos),
            mergeMap(() =>
                this.alumnosService.getAlumnos().pipe(
                    map(alumnos => AlumnosActions.cargarAlumnosSuccess({ alumnos })),
                    catchError(error => of(AlumnosActions.cargarAlumnosError({ error })))
                )
            )
        )
    );

    constructor(private actions$: Actions, private alumnosService: AlumnosService) { }
}
