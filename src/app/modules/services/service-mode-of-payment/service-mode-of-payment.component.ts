import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-service-mode-of-payment',
  templateUrl: './service-mode-of-payment.component.html',
  styleUrls: ['./service-mode-of-payment.component.scss']
})
export class ServiceModeOfPaymentComponent implements OnInit {

  modal: boolean;
  isEdited: boolean;


  servicePayment = new FormGroup({
    ModeOfPayment: new FormControl(),
    PayTypeId : new FormControl()
  });


  displayedColumns = ['srNo', 'ModeOfPayment', 'action'];
  dataSource: any = [];
  response: any;


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private httpService: HttpService, private router: Router, private toaster: ToastrManager) {
    this.getServicePaymentData();
  }

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getServicePaymentData() {
    this.httpService.getSecured(environment.getServicePaytypeData).subscribe(data => {
      this.response = data.data[0];
      this.response = data.data[0].filter(e => e.isSplited != true);
      this.dataSource = new MatTableDataSource(this.response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  getServicePaymentDataById(PayTypeId) {
    this.httpService.getSecured(environment.getServicePaytypeDataById.replace('{PayTypeId}', PayTypeId)).subscribe(data => {
      this.servicePayment.patchValue(data.data)
    })
  }

  addServicePaymentForm() {
    this.modal = true;
  }

  cancelForm() {
    this.modal = false;
    // this.router.navigate(['home/service']);
  }

  submitServicePaymentForm() {
    if (!this.isEdited) {

      if (this.servicePayment.valid) {
        this.httpService.postSecured(environment.postServicePaytypeData, this.servicePayment.value).subscribe(data => {
          this.toaster.successToastr('Record saved successfully');
          this.modal = false;
          this.getServicePaymentData();
        })
      }
    } else {
      this.httpService.postSecured(environment.updateServicePaytypeData, this.servicePayment.value).subscribe(data => {
        this.toaster.successToastr('Record saved successfully');
        this.servicePayment.reset()
        this.modal = false;
        this.isEdited = false;
        this.getServicePaymentData();
      })
    }
  }

  editForm(PayTypeId) {
    this.modal = true;
    this.isEdited = true;
    this.getServicePaymentDataById(PayTypeId)
  }



}
