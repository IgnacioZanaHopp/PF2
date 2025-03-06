// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from '../app/store/alumnnos/alumnos.component';
// Importa también CursosComponent, ClasesComponent si los tienes

const routes: Routes = [
  { path: '', redirectTo: 'alumnos', pathMatch: 'full' },
  { path: 'alumnos', component: AlumnosComponent },
  // { path: 'cursos', component: CursosComponent },
  // { path: 'clases', component: ClasesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
