import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { FormGroup, FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-client-from',
  templateUrl: './client-from.component.html',
  styleUrls: ['./client-from.component.scss']
})
export class ClientFromComponent implements OnInit {

  response: any;


  constructor(private httpService: HttpService, private router: Router, private toaster: ToastrManager) { 

  }
  



  clientForm = new FormGroup({
    clientGroup: new FormControl(),
    clientName: new FormControl(),
    clientCode: new FormControl(),
    clientGST: new FormControl(),
    incorporationDate: new FormControl(),
    panNo: new FormControl(),
    adharNo: new FormControl(),
    clientAddress: new FormControl(),
    currentStatus: new FormControl(),
    agreementStatus: new FormControl()
  });


  ngOnInit() {
  }

  submitClientForm(){

    if(this.clientForm.valid){

      this.httpService.postSecured(environment.postClientData,this.clientForm.value).subscribe(data=>{
        this.response=data;

        this.router.navigate(['home/client']);

      })

    }
  }

  cancelForm(){
    this.clientForm.reset()
    this.router.navigate(['home/client']);
  }

}
