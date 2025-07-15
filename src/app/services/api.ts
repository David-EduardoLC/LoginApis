import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private escuelajsUrl = 'https://api.escuelajs.co/api/v1/users';
  private rickUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.escuelajsUrl);
  }

  getCharacters(): Observable<any> {
    return this.http.get<any>(this.rickUrl);
  }
}
