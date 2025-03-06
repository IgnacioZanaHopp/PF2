// src/app/material/material.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

// etc.

@NgModule({
  imports: [
    // ...
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
    // ...
  ],
  // ...
})
export class AlumnosModule {}


@NgModule({
  imports: [
    // ...
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    // ...
  ],
  exports: [
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    // ...
  ]
})
export class MaterialModul {}

// Agrega aquí cualquier otro componente de Angular Material que uses

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule,
    MatCardModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule,
    MatCardModule
  ]
})
export class MaterialModule {}
