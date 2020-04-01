import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  getSecured(url): Observable<any> {
    return this.httpClient.get(url);
  }

  postSecured(url, payload): Observable<any> {
    return this.httpClient.post(url, payload);
  }

  putSecured(url, payload): Observable<any> {
    return this.httpClient.put(url, payload);
  }

  patchSecured(url, payload) {
    return this.httpClient.patch(url, payload);
  }

  deleteSecured(url) {
    return this.httpClient.delete(url);
  }


  signOut() {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }
}
