import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, Routes } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  tabChangedIndex!:number
  constructor(private router: Router, private route: ActivatedRoute,public authService: AuthService,) {}

  
  ngOnInit(): void {
    this.updateSelectedTabManual();  // Call this method initially

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateSelectedTabManual();
      }
    });
  
    this.route.firstChild?.url.subscribe(() => {
      this.updateSelectedTabManual();
    });

  }

  updateSelectedTabManual(): void {
    const currentRoute = this.route.firstChild?.routeConfig?.path;

    console.log(currentRoute)
    if (currentRoute === 'login') {
      this.authService.updateSelectedTabIndex(0);
      this.tabChanged(0)
    } else if (currentRoute === 'register') {
      
      this.authService.updateSelectedTabIndex(1);
      this.tabChanged(1)
    }
  }

  tabChanged(index: number): void {
    this.authService.selectedTabIndex$.subscribe((res) => (this.tabChangedIndex = res));
    console.log(index);
    this.authService.updateSelectedTabIndex(index);
  
    if (index === 0) {
      this.router.navigate(['/auth/login']);
    } else if (index === 1) {
      this.router.navigate(['/auth/register']);
    }
  }
}
