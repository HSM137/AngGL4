import { Injectable } from '@angular/core';
import { Liste } from './liste';
@Injectable({
  providedIn: 'root'
})
export class CvService {

  constructor() { }

  getCvs() {
    return Liste.list;
  }
}
