import { Component } from '@angular/core';
import { Router, Routes,NavigationEnd } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  selectedIndex: number = 0;
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

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateSelectedTab();
      }
    });
  }


  updateSelectedTab(): void {
    const currentUrl = this.router.url;

    if (currentUrl.includes('/auth/login')) {
      // Set the selected tab index for the login tab
      // Adjust the index based on your tab order (0-indexed)
      // For example, if login is the first tab, set selectedIndex to 0
      this.selectedIndex = 0;
    } else if (currentUrl.includes('/auth/register')) {
      // Set the selected tab index for the register tab
      // Adjust the index based on your tab order
      this.selectedIndex = 1;
    }
  }

  tabChanged(index: number): void {
    if (index === 0) {
      this.router.navigate(['/auth/login']);
    } else if (index === 1) {
      this.router.navigate(['/auth/register']);
    }
  }
}
