import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-contact-table',
  templateUrl: './contact-table.component.html',
  styleUrls: ['./contact-table.component.scss']
})
export class ContactTableComponent implements OnInit {

  displayedColumns = ['srNo', 'ContactPersonName' , 'Email', 'Designation', 'MobileNumber1', 'MobileNumber2','Telephone','Address','Reference','CurrentStatus', 'action'];
  dataSource: any = [];
  response: any;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private httpService: HttpService, private router: Router) {
    this.getcontactData();
  }
  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getcontactData() {
    this.httpService.getSecured(environment.getContactData).subscribe(data => {
      this.response = data.data[0];
      this.response = data.data[0].filter(e => e.isSplited != true);
      this.dataSource = new MatTableDataSource(this.response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  contactForm(){
    this.router.navigate(['home/contact/contact-from']);

  }

}
