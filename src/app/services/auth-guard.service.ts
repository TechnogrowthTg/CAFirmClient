import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrManager } from 'ng6-toastr-notifications';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate  {

  userData: any;
  currentUser: any;
  roles: any = [];


  constructor(private toaster: ToastrManager) { 
    this.getToken();
  }


  getToken() {
    this.userData = sessionStorage.getItem('token');
    // console.log("userData",this.userData);
    const helper = new JwtHelperService();
    this.currentUser = helper.decodeToken(this.userData);
    console.log("user_data",this.currentUser);

  }

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    let result: Boolean = false;
    const authRoles = route.routeConfig.data.roles[0];
 
    this.roles.push(this.currentUser.role);
    console.log( this.roles);
    if(authRoles == this.currentUser.role){
      result = true;
    }
    // this.currentUser.role.forEach(element => {
    //   while (authRoles == element) {
    //      result = true;
    //      break;
    //    }
    //  });
    if (result == false) {
      this.toaster.errorToastr('You dont have permission');
     }
    return result == true ? true : false;
   }
}
