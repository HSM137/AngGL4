import { v4 as uuidv4 } from 'uuid';

export class Personne{
  id: number;
  nom: string;
  prenom: string;
  age: number;
  cin: number;
  job: string;
  path: string;

  constructor(nom= '', prenom= '', age= 0, cin= 0, job= '', path= '') {
    this.id = uuidv4();
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.cin = cin;
    this.job = job;
    this.path = path;
  }
}
