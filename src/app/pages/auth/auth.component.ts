import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  constructor(private router: Router) {}
  routes: Routes = [
    {
      path: 'auth',
      component: AuthComponent,
      children: [
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent },
        { path: '', redirectTo: 'login', pathMatch: 'full' },
      ],
    },
  ];
  tabChanged(index: number): void {
    if (index === 0) {
      this.router.navigate(['/auth/login']);
    } else if (index === 1) {
      this.router.navigate(['/auth/register']);
    }
  }
}
