import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-component',
  templateUrl: './cv-component.component.html',
  styleUrls: ['./cv-component.component.css']
})
export class CvComponentComponent implements OnInit {

  personne;

  constructor() { }

  ngOnInit(): void {
  }

  affectToDetail(personne) {
    this.personne=personne;
  }
}
