import { Component, OnInit } from '@angular/core';
import {GridDataService} from '../grid-data/grid-data.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  readonly grid = this.gridService.gridData;

  constructor(private readonly gridService: GridDataService) { }

  ngOnInit() {
  }

}
