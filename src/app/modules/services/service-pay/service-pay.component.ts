import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-service-pay',
  templateUrl: './service-pay.component.html',
  styleUrls: ['./service-pay.component.scss']
})
export class ServicePayComponent implements OnInit {

  displayedColumns = ['srNo', 'PeriodOfService','DefaultAmount', 'action'];
  dataSource: any = [];
  response: any;


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private httpService: HttpService, private router: Router) {
    this.getServiceGroupData();
  }

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getServiceGroupData() {
    this.httpService.getSecured(environment.getServicePayData).subscribe(data => {
      this.response = data.data[0];
      this.response = data.data[0].filter(e => e.isSplited != true);
      this.dataSource = new MatTableDataSource(this.response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  clientForm(){
    this.router.navigate(['home/service']);
  }


}
