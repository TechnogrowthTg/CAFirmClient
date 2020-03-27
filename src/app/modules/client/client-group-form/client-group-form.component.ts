import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { FormGroup, FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-client-group-form',
  templateUrl: './client-group-form.component.html',
  styleUrls: ['./client-group-form.component.scss']
})
export class ClientGroupFormComponent implements OnInit {

  response: any;
  GroupId : any;

  clientGroupForm = new FormGroup({
    GroupName: new FormControl(),
    GroupShortName: new FormControl(),
    GroupContact: new FormControl(),
    GroupId : new FormControl()
  });

  constructor(private httpService: HttpService, private router: Router, private toaster: ToastrManager, private activeRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activeRoute.params.subscribe(param => {
      this.GroupId = param.group_id;
      if (this.GroupId != 0) {
        this.getformdata(this.GroupId);
      }
    });
  }


  // get form data from id
  getformdata(GroupId) {
    this.httpService.getSecured(environment.getClientGroupDataById.replace('{groupById}', GroupId)).subscribe(data => {
      this.response = data.data;
      this.clientGroupForm.patchValue(this.response)
    })
  }


  // submit and update form

  submitClientGroupForm(){
    if(this.GroupId == 0){ // add new group

    if(this.clientGroupForm.valid){
      this.httpService.postSecured(environment.postClientGroupData,this.clientGroupForm.value).subscribe(data=>{
        this.response=data;
        this.toaster.successToastr('Record saved successfully');
        this.router.navigate(['home/client']);
      })
    }
  }else{                 // update group
    this.httpService.postSecured(environment.updateClientGroupData, this.clientGroupForm.value).subscribe(data => {
      this.response = data;
      this.toaster.successToastr('Record saved successfully');
      this.router.navigate(['home/client']);
      this.clientGroupForm.reset()
    })

  }

  }

  cancelForm(){
    this.clientGroupForm.reset()
    this.router.navigate(['home/client']);
  }
}
