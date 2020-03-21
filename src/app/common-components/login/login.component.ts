import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/environments/environment';
import { AuthGuardService } from 'src/app/services/auth-guard.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  email:any;
  password:any;
  response: any;

  loginForm = new FormGroup({
    email:new FormControl('',Validators.required),
    password: new FormControl('', [Validators.required])

  })
  constructor(public router: Router,private toaster: ToastrManager, private httpService: HttpService, private auth: AuthGuardService) {
    if (sessionStorage.getItem('token')) {
          this.router.navigate(['home/dashboard']);
    } else {
      this.router.navigate(['login']);
    }
   }

  ngOnInit() {
  }



  login(){
    this.email = this.loginForm.controls.email.value;
    this.password = this.loginForm.controls.password.value;
    // this.router.navigate(['home/dashboard']);

    if(this.loginForm.valid){

      this.httpService.postSecured(environment.login,this.loginForm.value).subscribe(data =>{
        this.response=data;
        console.log(this.response);

        if(this.response.error === false){
          sessionStorage.setItem('token',this.response.result[0].token);
          this.auth.getToken();
          console.log(this.auth.currentUser);
          this.router.navigate(['home/dashboard']);
          this.toaster.successToastr('You have successfully logged in');

        }else{
          this.onLoginFailure();

        }
        
      })
    }
  }

  onLoginFailure() {
    this.router.navigate(['login']);
    this.toaster.errorToastr('Unauthorized User please try again');

  }
}
