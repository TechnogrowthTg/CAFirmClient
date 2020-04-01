import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { FormGroup, FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Location } from '@angular/common';

@Component({
  selector: 'app-client-from',
  templateUrl: './client-from.component.html',
  styleUrls: ['./client-from.component.scss']
})
export class ClientFromComponent implements OnInit {

  response: any;
  clinetID: any;
  clinetGroupList: any;


  constructor(private httpService: HttpService, private router: Router, private toaster: ToastrManager, private activeRoute: ActivatedRoute,private location:Location) {


    this.getFromGroup();
  }

  clientForm = new FormGroup({
    GroupId: new FormControl(),
    ClientName: new FormControl(),
    ClientEmail: new FormControl(),
    GstNumber: new FormControl(),
    PanNumber: new FormControl(),
    AdharNumber: new FormControl(),
    ClientAddress: new FormControl(),
    TypeOfEntity: new FormControl(),
    CurrentStatus: new FormControl(),
    AgreementStatus: new FormControl(),
    IncorporationDate: new FormControl(),
    ClientId: new FormControl()
  });


  ngOnInit() {

    this.activeRoute.params.subscribe(param => {
      this.clinetID = param.client_id;
      if (this.clinetID != 0) {
        this.getformdata(this.clinetID);
      }
    });

  }

  // get from group data for dropdown
  getFromGroup(){
    this.httpService.getSecured(environment.getClientGroupData).subscribe(data => {
      this.clinetGroupList = data.data;
    })
  }


// get form data from id
  getformdata(clientId) {
    this.httpService.getSecured(environment.getClientDataById.replace('{clientId}', clientId)).subscribe(data => {
      this.response = data.data;
      this.clientForm.patchValue(this.response)
    })
  }


  // submit and update form
  submitClientForm() {
    if (this.clinetID == 0) {   // new client
      if (this.clientForm.valid) {

        this.httpService.postSecured(environment.postClientData, this.clientForm.value).subscribe(data => {
          this.response = data;
          this.toaster.successToastr('Record saved successfully');
          // this.router.navigate(['home/client']);
          this.location.back();
          this.clientForm.reset()
        })
      }
    } else {    // update client

      this.httpService.postSecured(environment.updateClientData, this.clientForm.value).subscribe(data => {
        this.response = data;
        this.toaster.successToastr('Record saved successfully');
        // this.router.navigate(['home/client']);
        this.location.back();

        this.clientForm.reset()
      })
    }
  }


  // cancel form
  cancelForm() {
    this.clientForm.reset()
    this.router.navigate(['home/client']);
  }
}
