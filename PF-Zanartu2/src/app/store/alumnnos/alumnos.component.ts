// src/app/features/alumnos/alumnos.component.ts
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { loadAlumnos, deleteAlumno } from './store/app.actions';
import { selectAllAlumnos, selectAlumnosLoading } from './store/alumnos.selectors';
import { Alumno } from './models/alumnos.models';
import { MatDialog } from '@angular/material/dialog';
import { AlumnoFormDialogComponent } from '../alumno-form-dialog/alumno-form-dialog.component';
import { createAlumno, updateAlumno } from './store/app.actions';

@Component({
  selector: 'app-alumnos',
  template: `
    <h2>Gestión de Alumnos</h2>

    <!-- Barra de búsqueda -->
    <mat-form-field appearance="outline">
      <mat-label>Buscar</mat-label>
      <input matInput (keyup)="applyFilter($event)" placeholder="Filtrar alumnos" />
    </mat-form-field>

    <!-- Botón para crear un nuevo alumno -->
    <button mat-raised-button color="primary" (click)="openCreateAlumno()">
      Nuevo Alumno
    </button>

    <!-- Indicador de carga -->
    <ng-container *ngIf="loading$ | async; else showTable">
      <p>Cargando alumnos...</p>
    </ng-container>

    <!-- Tabla con paginación y orden -->
    <ng-template #showTable>
      <table mat-table [dataSource]="dataSource" matSort class="mat-elevation-z8">

        <!-- Nombre Column -->
        <ng-container matColumnDef="nombre">
          <th mat-header-cell *matHeaderCellDef mat-sort-header>Nombre</th>
          <td mat-cell *matCellDef="let alumno">{{ alumno.nombre }}</td>
        </ng-container>

        <!-- Apellido Column -->
        <ng-container matColumnDef="apellido">
          <th mat-header-cell *matHeaderCellDef mat-sort-header>Apellido</th>
          <td mat-cell *matCellDef="let alumno">{{ alumno.apellido }}</td>
        </ng-container>

        <!-- Email Column -->
        <ng-container matColumnDef="email">
          <th mat-header-cell *matHeaderCellDef mat-sort-header>Email</th>
          <td mat-cell *matCellDef="let alumno">{{ alumno.email }}</td>
        </ng-container>

        <!-- Actions Column -->
        <ng-container matColumnDef="actions">
          <th mat-header-cell *matHeaderCellDef>Acciones</th>
          <td mat-cell *matCellDef="let alumno">
            <button mat-button color="primary" (click)="openEditAlumno(alumno)">Editar</button>
            <button mat-button color="warn" (click)="onDelete(alumno.id)">Eliminar</button>
          </td>
        </ng-container>

        <!-- Definición de filas -->
        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
      </table>

      <!-- Paginador -->
      <mat-paginator [pageSizeOptions]="[5, 10, 20]" showFirstLastButtons></mat-paginator>
    </ng-template>
  `
})
export class AlumnosComponent implements OnInit, AfterViewInit {
  // Observables
  loading$ = this.store.select(selectAlumnosLoading);

  // MatTableDataSource nos facilita filtro, paginación, etc.
  dataSource = new MatTableDataSource<Alumno>([]);
  displayedColumns: string[] = ['nombre', 'apellido', 'email', 'actions'];

  // ViewChild para vincular sort y paginator
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private store: Store,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    // Cargamos los alumnos al iniciar
    this.store.dispatch(loadAlumnos());

    // Nos suscribimos a la lista de alumnos y la cargamos en dataSource
    this.store.select(selectAllAlumnos).subscribe(alumnos => {
      this.dataSource.data = alumnos;
    });
  }

  ngAfterViewInit() {
    // Asignamos el sort y paginator a la dataSource
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // Filtra por nombre, apellido, etc.
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onDelete(id: number) {
    this.store.dispatch(deleteAlumno({ id }));
  }

  openCreateAlumno() {
    const dialogRef = this.dialog.open(AlumnoFormDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Llamamos a la acción para crear
        this.store.dispatch(createAlumno({ alumno: result }));
      }
    });
  }

  openEditAlumno(alumno: Alumno) {
    const dialogRef = this.dialog.open(AlumnoFormDialogComponent, {
      width: '400px',
      data: { alumno }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Llamamos a la acción para actualizar
        this.store.dispatch(updateAlumno({ alumno: result }));
      }
    });
  }
}
