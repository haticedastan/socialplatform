import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './/home/home.component';
import { DashboardComponent } from './/dashboard/dashboard.component';
import { RegisterComponent } from './/register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
// Our Array of Angular 2 Routes
const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent // The Default Route
  },
  {
    path: 'dashboard',
    component: DashboardComponent // The Dashboard Route
  },
  {
    path: 'register',
    component: RegisterComponent // The Register Route
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  { path: '**', component: HomeComponent } // The "Catch-All" Route
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }