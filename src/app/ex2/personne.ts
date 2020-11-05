export class Personne{
  id: number;
  nom: string;
  prenom: string;
  age: number;
  cin: number;
  job: string;
  path: string;

  constructor(id= 0, nom= '', prenom= '', age= 0, cin= 0, job= '', path= '') {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.cin = cin;
    this.job = job;
    this.path = path;
  }
}
