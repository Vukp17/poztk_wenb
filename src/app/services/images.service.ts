import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {



  private loginUrl = `${environment.apiUrl}images`;

  constructor(private http: HttpClient) { }

  getImages(): Observable<any> {
    return this.http.get<any>(this.loginUrl);
  }
}
