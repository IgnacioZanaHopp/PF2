import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Alumno } from '../alumnnos/models/alumnos.models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alumno-form-dialog',
  template: `
    <h2 mat-dialog-title>
      {{ data.alumno ? 'Editar Alumno' : 'Nuevo Alumno' }}
    </h2>

    <mat-dialog-content>
      <form [formGroup]="alumnoForm">
        <mat-form-field appearance="outline" style="width: 100%;">
          <mat-label>Nombre</mat-label>
          <input matInput formControlName="nombre" required />
        </mat-form-field>

        <mat-form-field appearance="outline" style="width: 100%;">
          <mat-label>Apellido</mat-label>
          <input matInput formControlName="apellido" required />
        </mat-form-field>

        <mat-form-field appearance="outline" style="width: 100%;">
          <mat-label>Email</mat-label>
          <input matInput formControlName="email" />
        </mat-form-field>
      </form>
    </mat-dialog-content>

    <mat-dialog-actions align="end">
      <button mat-button (click)="onCancel()">Cancelar</button>
      <button
        mat-raised-button
        color="primary"
        [disabled]="alumnoForm.invalid"
        (click)="onSave()"
      >
        Guardar
      </button>
    </mat-dialog-actions>
  `,
})
export class AlumnoFormDialogComponent {
  alumnoForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AlumnoFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { alumno?: Alumno },
    private fb: FormBuilder
  ) {
    this.alumnoForm = this.fb.group({
      nombre: [data.alumno?.nombre || '', Validators.required],
      apellido: [data.alumno?.apellido || '', Validators.required],
      email: [data.alumno?.email || ''],
    });
  }

  onSave() {
    if (this.alumnoForm.valid) {
      // Retornamos los datos al cerrar el diálogo
      this.dialogRef.close({
        ...this.data.alumno,
        ...this.alumnoForm.value,
      });
    }
  }

  onCancel() {
    this.dialogRef.close(null);
  }
}
