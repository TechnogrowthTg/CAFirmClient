import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-client-group-table',
  templateUrl: './client-group-table.component.html',
  styleUrls: ['./client-group-table.component.scss']
})
export class ClientGroupTableComponent implements OnInit {
  displayedColumns = ['srNo','groupName', 'groupShortName', 'groupContact', 'action'];
  dataSource: any = [];
  response: any;


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private httpService: HttpService, private router: Router) {

    this.getClientGroupData()
  }
  ngOnInit() {
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getClientGroupData() {
    this.httpService.getSecured(environment.getClientFormData).subscribe(data => {
      this.response = data;
      this.response = data.filter(e => e.isSplited != true);
      this.dataSource = new MatTableDataSource(this.response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  clientForm() {
    this.router.navigate(['home/client/client-group-form']);

  }

}
