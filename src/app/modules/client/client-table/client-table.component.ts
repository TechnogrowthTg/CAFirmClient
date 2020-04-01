import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.scss']
})
export class ClientTableComponent implements OnInit {

  displayedColumns = ['srNo', 'GroupName', 'ClientName', 'ClientEmail', 'GstNumber', 'PanNumber', 'AdharNumber', 'ClientAddress', 'TypeOfEntity', 'CurrentStatus', 'AgreementStatus', 'IncorporationDate', 'action'];
  dataSource: any = [];
  response: any;


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private httpService: HttpService, private router: Router, private toaster: ToastrManager) {
    this.getClientData();
  }

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getClientData() {
    this.httpService.getSecured(environment.getClientData).subscribe(data => {
      this.response = data.data;
      this.response = data.data.filter(e => e.isSplited != true);
      this.dataSource = new MatTableDataSource(this.response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  clientForm() {
    this.router.navigate(['home/client/client-form', 0]);
  }

  editForm(client_id) {
    this.router.navigate(['/home/client/client-form', client_id]);

  }

  deleteForm(ClientId) {
    let data = {
      ClientId: ClientId
    }
    
    this.httpService.putSecured(environment.deleteClientData, data).subscribe(data => {
      this.toaster.successToastr('Record delete successfully');
      this.getClientData();
    })
  }


}
