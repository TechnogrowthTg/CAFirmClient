import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-service-group',
  templateUrl: './service-group.component.html',
  styleUrls: ['./service-group.component.scss']
})
export class ServiceGroupComponent implements OnInit {

  modal: boolean;
  isEdited: boolean;


  serviceGroup = new FormGroup({
    ServiceGroupName: new FormControl(),
    ServiceGroupId: new FormControl()
  });


  displayedColumns = ['srNo', 'ServiceGroupName', 'action'];
  dataSource: any = [];
  response: any;


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private httpService: HttpService, private router: Router, private toaster: ToastrManager) {
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
    this.httpService.getSecured(environment.getServiceceGroupData).subscribe(data => {
      this.response = data.data;
      this.response = data.data.filter(e => e.isSplited != true);
      this.dataSource = new MatTableDataSource(this.response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }


  getServiceGroupDataByid(ServiceGroupId) {
    this.httpService.getSecured(environment.getServiceceGroupDataById.replace('{ServiceGroupId}', ServiceGroupId)).subscribe(data => {
      this.serviceGroup.patchValue(data.data)
    })
  }

  addServiceGroupForm() {
    this.modal = true;
  }

  cancelForm() {
    this.modal = false;
    // this.router.navigate(['home/service']);
  }

  submitServiceGroupForm() {
    if (!this.isEdited) {

      if (this.serviceGroup.valid) {
        this.httpService.postSecured(environment.postServiceceGroupData, this.serviceGroup.value).subscribe(data => {
          this.toaster.successToastr('Record saved successfully');
          this.modal = false;
          this.getServiceGroupData();
        })
      }
    } else {
      this.httpService.postSecured(environment.updateServiceceGroupData, this.serviceGroup.value).subscribe(data => {
        this.toaster.successToastr('Record saved successfully');
        this.serviceGroup.reset()
        this.modal = false;
        this.isEdited = false;
        this.getServiceGroupData();
      })
    }
  }

  editForm(ServiceGroupId) {
    this.modal = true;
    this.isEdited = true;
    this.getServiceGroupDataByid(ServiceGroupId)
  }


  deleteForm(ServiceGroupId) {
    let data = {
      ServiceGroupId: ServiceGroupId
    }
    
    this.httpService.putSecured(environment.deleteServiceceGroupData, data).subscribe(data => {
      this.toaster.successToastr('Record delete successfully');
      this.getServiceGroupData();
    })
  }



}
