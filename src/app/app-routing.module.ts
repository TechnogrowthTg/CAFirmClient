import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './common-components/login/login.component';
import { HomeComponent } from './common-components/home/home.component';
import { AuthGuardService } from './services/auth-guard.service';
import { Role } from './models/role.model';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  
  {
    path: 'home', component: HomeComponent, children: [
      {
        path:'dashboard',
        loadChildren: () => import('../app/modules/dashboard/dashboard.module').then(m => m.DashboardModule),
        // canActivate: [AuthGuardService],
        // data:{roles :[Role.dashboard]}

      
      },
      {
        path: 'client',
        loadChildren: () => import('../app/modules/client/client.module').then(m => m.ClientModule),
        // canActivate: [AuthGuardService],
        // data:{roles :[Role.client]}
      
      },
      {
        path: 'contact',
        loadChildren: () => import('../app/modules/contact/contact.module').then(m => m.ContactModule),
        // canActivate: [AuthGuardService],
        // data:{roles :[Role.contact]}
      
      },
      {
        path: 'services',
        loadChildren: () => import('../app/modules/services/services.module').then(m => m.ServicesModule),
        // canActivate: [AuthGuardService],
        // data:{roles :[Role.services]}
      
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
