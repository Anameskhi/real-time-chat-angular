import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, Routes } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  animations: [
    trigger('stepperAnimation', [
      state('hide', style({
        transform: 'scale(0)',
        opacity: 0
      })),
      state('show', style({
        transform: 'scale(1)',
        opacity: 1
      })),
      transition('hide => show', animate('300ms ease-in')),
      transition('show => hide', animate('300ms ease-out'))
    ])
  ]
})
export class AuthComponent implements OnInit {
  navLinks: any[];
  tabChangedIndex: number = 0;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.navLinks = [
      { label: 'Login', link: './login', index: 0 },
      { label: 'Register', link: './register', index: 1 }
    ];
  }
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateSelectedTabManual();
      }
    });

    this.route.url.subscribe(() => {
      this.updateSelectedTabManual();
    });

    // Ensure selected tab index is correctly initialized on component load
    this.updateSelectedTabManual();
  }

  tabChanged(event: any): void {
    if (event.index === 0) {
      this.router.navigate(['/auth/login']);
    } else if (event.index === 1) {
      this.router.navigate(['/auth/register']);
    } else if (event.index === -1) {
      this.router.navigate(['/']);
      this.tabChangedIndex = 0;
    }
  }
  updateSelectedTabManual(): void {
    const currentRoute = this.route.firstChild?.snapshot.routeConfig?.path;

    if (currentRoute === 'login') {
      this.tabChangedIndex = 0;
    } else if (currentRoute === 'register') {
      this.tabChangedIndex = 1;
    } else {
      // Fallback to a default tab index if the route is neither 'login' nor 'register'
      this.tabChangedIndex = 0;
    }
  }
}
