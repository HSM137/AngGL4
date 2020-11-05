import { Liste } from './../liste';

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-liste-component',
  templateUrl: './liste-component.component.html',
  styleUrls: ['./liste-component.component.css']
})
export class ListeComponentComponent implements OnInit {

  list;
  @Output() selectPersonne= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.list= Liste.list;
  }

  emit(personne) {
    this.selectPersonne.emit(personne)
  }

}
