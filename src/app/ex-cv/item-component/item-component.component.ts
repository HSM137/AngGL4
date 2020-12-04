import { CvService } from './../cv.service';
import { Personne } from './../personne';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-component',
  templateUrl: './item-component.component.html',
  styleUrls: ['./item-component.component.css']
})
export class ItemComponentComponent implements OnInit {

  @Input() personne: Personne;
  constructor(
    private cvService: CvService
  ) { }

  ngOnInit(): void {
  }

  emit() {
    this.cvService.selectPersonne(this.personne);
  }

}
