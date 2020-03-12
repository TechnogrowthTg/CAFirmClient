import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user_name = "Admin@gmail.com"
  constructor(public httpService : HttpService,private router:Router) { }

  ngOnInit() {
  }

}
