import { CvService } from './../cv.service';
import { EmbaucheService } from './../../embauche/embauche.service';
import { Personne } from './../personne';
import { Component, Input, OnInit } from '@angular/core';
import {distinctUntilChanged} from 'rxjs/operators'

@Component({
  selector: 'app-detail-component',
  templateUrl: './detail-component.component.html',
  styleUrls: ['./detail-component.component.css']
})
export class DetailComponentComponent implements OnInit {

  @Input() personne: Personne;

  constructor(
    private embaucheService: EmbaucheService,
    private cvService: CvService
  ) { }

  ngOnInit(): void {
    this.cvService.selectPersonneSubject
    .pipe(distinctUntilChanged())
    .subscribe((personne) => (this.personne = personne));
  }

  embaucher() {
    this.embaucheService.embaucher(this.personne);
  }

}
