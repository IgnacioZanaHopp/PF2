import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosListComponent } from '../app/features/alumnos/alumnos-list/alumnos-list.component' 


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AlumnosListComponent],  // 👈 Importa aquí
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'PF-TuApellido';
}
