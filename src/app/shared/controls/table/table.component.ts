import { Component, OnInit, ChangeDetectionStrategy, Input, ViewChild, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CurrentPage } from './current-page';
import { TableColumn } from './table-column';
import { TableSort } from './table-sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit, AfterViewInit {

  public tableDataSource = new MatTableDataSource([]);
  public displayedColumns: string[];
  @ViewChild(MatPaginator, { static: false, read: true }) matPaginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) matSort: MatSort;

  @Input() isPageable = false;
  @Input() isSortable = false;
  @Input() tableColumns: TableColumn[];
  @Input() rowActionIcon: string;
  @Input() paginationSizes: number[] = [5, 10, 15];
  @Input() defaultPageSize = this.paginationSizes[1];
  @Input() totalRows = 0;

  @Output() sort: EventEmitter<TableSort> = new EventEmitter();
  @Output() onPageChange: EventEmitter<CurrentPage> = new EventEmitter();
  @Output() editAction: EventEmitter<any> = new EventEmitter<any>();
  @Output() deleteAction: EventEmitter<any> = new EventEmitter<any>();
  @Output() viewAction: EventEmitter<any> = new EventEmitter<any>();



  // this property needs to have a setter, to dynamically get changes from parent component
  @Input() set tableData(data: any[]) {
    this.setTableDataSource(data);
  }

  constructor() { }

  ngOnInit(): void {
    const columnNames = this.tableColumns.map((tableColumn: TableColumn) => tableColumn.name);
    if (this.rowActionIcon) {
      this.displayedColumns = [...columnNames,this.rowActionIcon]
    } else {
      this.displayedColumns = columnNames;
    }
  }

  // we need this, in order to make pagination work with *ngIf
  ngAfterViewInit(): void {
    //this.tableDataSource.paginator = this.matPaginator;
  }

  setTableDataSource(data: any) {
    this.tableDataSource = new MatTableDataSource<any>(data);
    //this.tableDataSource.paginator = this.matPaginator;
    //this.tableDataSource.sort = this.matSort;
  }

  sortTable(sortParameters: Sort) {
    const tableSort=new TableSort();
    tableSort.orderByPropertyName = this.tableColumns.find(column => column.name === sortParameters.active).sortKey;
    sortParameters.direction===''?sortParameters.direction='desc':sortParameters.direction=sortParameters.direction;
    tableSort.orderBy = sortParameters.direction.toUpperCase();
    this.sort.emit(tableSort);
  }

  emitEdit(row: any) {
    this.editAction.emit(row);
  }

  emitView(row:any) {
    this.viewAction.emit(row);
  }

  emitDelete(row:any) {
    this.deleteAction.emit(row);
  }

  page(event: PageEvent) {
    this.onPageChange.emit({ pageSize: event.pageSize, pageNumber: event.pageIndex + 1 });
  }

}