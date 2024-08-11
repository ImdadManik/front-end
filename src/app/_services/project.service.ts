// src/app/services/project.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl = 'http://localhost:3000/api/projects';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<any> {
    return this.http.get(this.apiUrl, this.getHttpOptions());
  }

  getProjectById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`, this.getHttpOptions());
  }

  createProject(project: any): Observable<any> {
    return this.http.post(this.apiUrl, project, this.getHttpOptions());
  }

  deleteProject(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, this.getHttpOptions());
  }

  private getHttpOptions() {
    const token = localStorage.getItem('jwtToken'); // Adjust the token retrieval as needed
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
  }
}
