import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-pipe',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class PipeTestComponent implements OnInit {

  imagePath="";

  constructor() { }

  ngOnInit(): void {
  }

}
