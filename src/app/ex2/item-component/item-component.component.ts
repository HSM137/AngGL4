import { Personne } from './../personne';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-component',
  templateUrl: './item-component.component.html',
  styleUrls: ['./item-component.component.css']
})
export class ItemComponentComponent implements OnInit {

  @Input() personne: Personne;
  @Output() selectPersonne=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  emit() {
    this.selectPersonne.emit(this.personne);
  }

}
