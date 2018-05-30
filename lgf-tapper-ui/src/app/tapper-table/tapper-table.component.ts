import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { TapperTableDataSource } from './tapper-table-datasource';

@Component({
  selector: 'tapper-table',
  templateUrl: './tapper-table.component.html',
  styleUrls: ['./tapper-table.component.css']
})
export class TapperTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: TapperTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new TapperTableDataSource(this.paginator, this.sort);
  }
}
