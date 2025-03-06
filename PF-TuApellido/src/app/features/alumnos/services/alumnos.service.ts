import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Alumno } from '../models/alumno.model';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  private apiUrl = 'https://dummyjson.com/users'; // API real con datos de prueba

  constructor(private http: HttpClient) {}

  getAlumnos(): Observable<Alumno[]> {
    return this.http.get<{ users: Alumno[] }>(this.apiUrl).pipe(
      map(response => response.users) // Extrae solo la lista de usuarios
    );
  }
}
