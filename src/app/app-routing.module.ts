import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './common-components/login/login.component';
import { HomeComponent } from './common-components/home/home.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  
  {
    path: 'home', component: HomeComponent, children: [
      {
        path: 'client',
        loadChildren: () => import('../app/modules/client/client.module').then(m => m.ClientModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('../app/modules/contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: 'services',
        loadChildren: () => import('../app/modules/services/services.module').then(m => m.ServicesModule)
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
