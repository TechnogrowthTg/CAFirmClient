import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { FormGroup, FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {


  response: any;


  constructor(private httpService: HttpService, private router: Router, private toaster: ToastrManager) { 

  }
  



  contactForm = new FormGroup({
    ContactPersonName: new FormControl(),
    Email: new FormControl(),
    Designation: new FormControl(),
    MobileNumber1: new FormControl(),
    MobileNumber2: new FormControl(),
    Telephone: new FormControl(),
    Address: new FormControl(),
    Reference: new FormControl(),
    CurrentStatus: new FormControl(),
    IsBroadService: new FormControl()
  });


  ngOnInit() {
  }

  submitContactForm(){

    if(this.contactForm.valid){

      this.httpService.postSecured(environment.postContactData,this.contactForm.value).subscribe(data=>{
        this.response=data;
        this.toaster.successToastr('Record saved successfully');
        this.router.navigate(['home/contact']);

      })

    }
  }

  cancelForm(){
    this.contactForm.reset()
    this.router.navigate(['home/contact']);
  }

}
