import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-service-pay',
  templateUrl: './service-pay.component.html',
  styleUrls: ['./service-pay.component.scss']
})
export class ServicePayComponent implements OnInit {

  modal: boolean;
  isEdited: boolean;
  serviceGroupList:any;
  serviceSubGroupList:any;



  servicePay = new FormGroup({
    PeriodOfService: new FormControl(),
    DefaultAmount: new FormControl(),
    ServicePayId : new FormControl(),
    ServiceGroupId: new FormControl(),
    ServiceSubGroupId: new FormControl(),
  });



  displayedColumns = ['srNo', 'PeriodOfService','DefaultAmount', 'action'];
  dataSource: any = [];
  response: any;


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private httpService: HttpService, private router: Router, private toaster: ToastrManager) {
    this.getServicePayData();
  }

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getServicePayData() {
    this.httpService.getSecured(environment.getServicePayData).subscribe(data => {
      this.response = data.data;
      this.response = data.data.filter(e => e.isSplited != true);
      this.dataSource = new MatTableDataSource(this.response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  getServiceGroupData() {
    this.httpService.getSecured(environment.getServiceceGroupData).subscribe(data => {
      this.serviceGroupList = data.data;
    })
  }
  getServiceGroupSubData() {
    this.httpService.getSecured(environment.getServiceSubGroupData).subscribe(data => {
      this.serviceSubGroupList = data.data;
    })
  }

  getServicePayDataById(ServicePayId) {
    this.httpService.getSecured(environment.getServicePayDataById.replace('{ServicePayId}', ServicePayId)).subscribe(data => {
      this.servicePay.patchValue(data.data)
    })
  }

  addServicePayForm() {
    this.modal = true;
    this.getServiceGroupData();
    this.getServiceGroupSubData();
  }

  cancelForm() {
    this.modal = false;
    // this.router.navigate(['home/service']);
  }

  submitServicePayForm() {
    if (!this.isEdited) {

      if (this.servicePay.valid) {
        this.httpService.postSecured(environment.postServicePayData, this.servicePay.value).subscribe(data => {
          this.toaster.successToastr('Record saved successfully');
          this.modal = false;
          this.getServicePayData();
        })
      }
    } else {
      this.httpService.postSecured(environment.updateServicePayData, this.servicePay.value).subscribe(data => {
        this.toaster.successToastr('Record saved successfully');
        this.servicePay.reset()
        this.modal = false;
        this.isEdited = false;
        this.getServicePayData();
      })
    }
  }

  editForm(ServicePayId) {
    this.modal = true;
    this.isEdited = true;
    this.getServicePayDataById(ServicePayId)
  }

  deleteForm(ServicePayId) {
    let data = {
      ServicePayId: ServicePayId
    }
    
    this.httpService.putSecured(environment.deleteServicePayData, data).subscribe(data => {
      this.toaster.successToastr('Record delete successfully');
      this.getServicePayData();
    })
  }
}
