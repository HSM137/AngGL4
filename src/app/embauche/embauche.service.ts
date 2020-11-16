import { Personne } from './../ex-cv/personne';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {

  private personnes : Personne[]= []

  constructor() { }

  getPersonneEmbauchees() {
    return this.personnes;
  }

  embaucher(personne: Personne) {
    if(this.personnes.indexOf(personne)>=0) {
      window.alert("Cette personne est deja embauchee");
    }
    else {
      this.personnes.push(personne);
    }
  }
}
