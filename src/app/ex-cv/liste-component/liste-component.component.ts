import { Personne } from './../personne';
import { CvService } from './../cv.service';
import { Liste } from '../liste';


import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-liste-component',
  templateUrl: './liste-component.component.html',
  styleUrls: ['./liste-component.component.css']
})
export class ListeComponentComponent implements OnInit {

  list: Personne[];

  constructor(
    private cvService : CvService
  ) { }

  ngOnInit(): void {
    this.cvService.getCvs().subscribe(
      (data:Personne[]) => {this.list=data;},
      error => this.list=Liste.list
    );
  }

}
