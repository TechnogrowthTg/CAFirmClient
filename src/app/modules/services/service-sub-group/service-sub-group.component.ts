import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-service-sub-group',
  templateUrl: './service-sub-group.component.html',
  styleUrls: ['./service-sub-group.component.scss']
})
export class ServiceSubGroupComponent implements OnInit {


  modal: boolean;
  isEdited: boolean;


  serviceSubGroup = new FormGroup({
    ServiceSubGroupName: new FormControl(),
    ServiceSubGroupId: new FormControl()
  });


  displayedColumns = ['srNo', 'ServiceSubGroupName', 'action'];
  dataSource: any = [];
  response: any;


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private httpService: HttpService, private router: Router, private toaster: ToastrManager) {
    this.getServiceGroupSubData();
  }

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getServiceGroupSubData() {
    this.httpService.getSecured(environment.getServiceSubGroupData).subscribe(data => {
      this.response = data.data[0];
      this.response = data.data[0].filter(e => e.isSplited != true);
      this.dataSource = new MatTableDataSource(this.response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  getServiceGroupSubDataByid(ServiceGroupId) {
    this.httpService.getSecured(environment.getServiceceGroupSubDataById.replace('{ServiceSubGroupId}', ServiceGroupId)).subscribe(data => {
      this.serviceSubGroup.patchValue(data.data)
    })
  }

  addServiceSubGroupForm() {
    this.modal = true;
  }

  cancelForm() {
    this.modal = false;
    // this.router.navigate(['home/service']);
  }

  submitServiceSubGroupForm() {
    if (!this.isEdited) {

      if (this.serviceSubGroup.valid) {
        this.httpService.postSecured(environment.postServiceceSubGroupData, this.serviceSubGroup.value).subscribe(data => {
          this.toaster.successToastr('Record saved successfully');
          this.modal = false;
          this.getServiceGroupSubData();
        })
      }
    } else {
      this.httpService.postSecured(environment.updateServiceceSubGroupData, this.serviceSubGroup.value).subscribe(data => {
        this.toaster.successToastr('Record saved successfully');
        this.serviceSubGroup.reset()
        this.modal = false;
        this.isEdited = false;
        this.getServiceGroupSubData();
      })
    }
  }

  editForm(ServiceGroupId) {
    this.modal = true;
    this.isEdited = true;
    this.getServiceGroupSubDataByid(ServiceGroupId)
  }


}
