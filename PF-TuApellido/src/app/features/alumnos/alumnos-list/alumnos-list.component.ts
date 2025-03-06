import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { MatCardModule } from '@angular/material/card'; // Si usas Angular Material
import { cargarAlumnos } from '../store/alumnos.actions';
import { selectAllAlumnos } from '../store/alumnos.selectors';
import { Observable } from 'rxjs';
import { Alumno } from '../models/alumno.model';

@Component({
  selector: 'app-alumnos-list',
  standalone: true,  // ✅ IMPORTANTE: Convertirlo en standalone
  imports: [CommonModule, MatCardModule], // ✅ Agregar los módulos que necesitas
  templateUrl: './alumnos-list.component.html',
})
export class AlumnosListComponent implements OnInit {
  alumnos$: Observable<Alumno[]>;

  constructor(private store: Store<any>) {
    this.alumnos$ = this.store.select(selectAllAlumnos);
  }

  ngOnInit() {
    this.store.dispatch(cargarAlumnos());
  }
}
