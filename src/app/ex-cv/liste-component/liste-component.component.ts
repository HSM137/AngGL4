import { CvService } from './../cv.service';


import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-liste-component',
  templateUrl: './liste-component.component.html',
  styleUrls: ['./liste-component.component.css']
})
export class ListeComponentComponent implements OnInit {

  list;
  @Output() selectPersonne= new EventEmitter();

  constructor(
    private cvService : CvService
  ) { }

  ngOnInit(): void {
    this.list= this.cvService.getCvs();
  }

  emit(personne) {
    this.selectPersonne.emit(personne)
  }

}
