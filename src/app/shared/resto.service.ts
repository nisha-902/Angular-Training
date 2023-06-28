import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restorant } from '../restorant';

@Injectable({
  providedIn: 'root'
})
export class RestoService {

  constructor(private http:HttpClient) { }
  //get all records
  getAll():Observable<Restorant>{
    return this.http.get<Restorant>("http://localhost:3000/restorant")
  }
}
