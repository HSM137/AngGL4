import { Personne } from './personne';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CvService {

  selectPersonneSubject = new Subject<Personne>();

  constructor(
    private http: HttpClient
  ) { }

  getCvs() : Observable<Personne[]>{
    return this.http.get<Personne[]>("https://immense-citadel-91115.herokuapp.com/api/personnes");
  }

  selectPersonne(personne: Personne) {
    this.selectPersonneSubject.next(personne);
  }
}
