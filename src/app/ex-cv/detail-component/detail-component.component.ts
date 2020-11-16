import { EmbaucheService } from './../../embauche/embauche.service';
import { Personne } from './../personne';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-component',
  templateUrl: './detail-component.component.html',
  styleUrls: ['./detail-component.component.css']
})
export class DetailComponentComponent implements OnInit {

  @Input() personne: Personne;

  constructor(
    private embaucheService: EmbaucheService
  ) { }

  ngOnInit(): void {
  }

  embaucher() {
    this.embaucheService.embaucher(this.personne);
  }

}
