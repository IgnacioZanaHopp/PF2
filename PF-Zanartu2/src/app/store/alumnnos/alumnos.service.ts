// src/app/pages/alumnos/alumnos.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alumno } from '../alumnnos/models/alumnos.models';

@Injectable({
    providedIn: 'root'
})
export class AlumnosService {
    // Ajusta la URL según tu API real o la de json-server
    private baseUrl = 'http://localhost:3000/alumnos';

    constructor(private http: HttpClient) { }

    getAlumnos(): Observable<Alumno[]> {
        return this.http.get<Alumno[]>(this.baseUrl);
    }

    createAlumno(alumno: Alumno): Observable<Alumno> {
        return this.http.post<Alumno>(this.baseUrl, alumno);
    }

    updateAlumno(alumno: Alumno): Observable<Alumno> {
        return this.http.put<Alumno>(`${this.baseUrl}/${alumno.id}`, alumno);
    }

    deleteAlumno(id: number): Observable<void> {
        return this.http.delete<void>(`${this.baseUrl}/${id}`);
    }
}
