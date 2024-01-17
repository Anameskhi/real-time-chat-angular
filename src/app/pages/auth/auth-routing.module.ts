import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'

  },
  {
    path: '',
    component: AuthComponent,
    children:[
  {
    path: 'login',
    component: LoginComponent,
    data: { tabIndex: 0 },
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: { tabIndex: 1 },
  },
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
