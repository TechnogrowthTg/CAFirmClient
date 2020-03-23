import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { FormGroup, FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.scss']
})
export class ServiceFormComponent implements OnInit {

  response: any;


  constructor(private httpService: HttpService, private router: Router, private toaster: ToastrManager) {
  }

  ServiceForm = new FormGroup({
    ServiceGroupName: new FormControl(),
    ServiceName: new FormControl(),
    ServicePayment: new FormControl(),
    ServiceAmount: new FormControl(),
    ServiceFrequency: new FormControl(),
  });

  ServiceGroupNameOptions: string[] = ['One', 'Two', 'Three'];
  ServiceGroupNameOptionsFilteredOptions: Observable<string[]>;
  
  ServiceNameOptions: string[] = ['One', 'Two', 'Three','Four','Five'];
  ServiceNameOptionsFilteredOptions: Observable<string[]>;

  ngOnInit() {

    this.ServiceGroupNameOptionsFilteredOptions = this.ServiceForm.controls.ServiceGroupName.valueChanges.pipe(
      startWith(''),
      map(value => this._filter_ServiceGroupName(value))
    );


    this.ServiceNameOptionsFilteredOptions = this.ServiceForm.controls.ServiceName.valueChanges.pipe(
      startWith(''),
      map(value => this._filter_ServiceName(value))
    );
  }

  private _filter_ServiceGroupName(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.ServiceGroupNameOptions.filter(option  => option .toLowerCase().indexOf(filterValue) === 0);
  }

  private _filter_ServiceName(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.ServiceNameOptions.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }



  // submit form
  submitServiceForm() {
    if (this.ServiceForm.valid) {

      this.httpService.postSecured(environment.postClientData, this.ServiceForm.value).subscribe(data => {
        this.response = data;

        this.router.navigate(['home/client']);

      })

    }
  }

  // cancel form

  cancelForm() {
    this.ServiceForm.reset()
    this.router.navigate(['home/client']);
  }
}
