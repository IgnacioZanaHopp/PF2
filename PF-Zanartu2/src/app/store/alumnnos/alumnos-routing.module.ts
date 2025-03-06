// src/app/pages/alumnos/alumnos-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from './alumnos.component';

const routes: Routes = [
    {
        path: '',
        component: AlumnosComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AlumnosRoutingModule { }
// src/app/pages/alumnos/alumnos-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from './alumnos.component';

const routes: Routes = [
    {
        path: '',
        component: AlumnosComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AlumnosRoutingModule { }
// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Ejemplo de un componente "HomeComponent"
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'alumnos',
        loadChildren: () =>
            import('./pages/alumnos/alumnos.module').then(m => m.AlumnosModule)
    },
    // Repite para cursos, clases, etc.
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
