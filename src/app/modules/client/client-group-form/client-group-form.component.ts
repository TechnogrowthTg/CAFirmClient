import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  clientGroupForm = new FormGroup({
    GroupName: new FormControl(),
    GroupShortName: new FormControl(),
    GroupContact: new FormControl()
  });

  constructor(private httpService: HttpService, private router: Router, private toaster: ToastrManager) { }

  ngOnInit() {
  }

  submitClientGroupForm(){

    if(this.clientGroupForm.valid){

      this.httpService.postSecured(environment.postClientGroupData,this.clientGroupForm.value).subscribe(data=>{
        this.response=data;

        this.router.navigate(['home/client']);

      })

    }
  }

  cancelForm(){
    this.clientGroupForm.reset()
    this.router.navigate(['home/client']);
  }
}
