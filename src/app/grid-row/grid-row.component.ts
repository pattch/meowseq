import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-row',
  templateUrl: './grid-row.component.html',
  styleUrls: ['./grid-row.component.css']
})
export class GridRowComponent implements OnInit {

    @Input() patternLength: number = 8;

  constructor() { }

  ngOnInit() {
  }

}
