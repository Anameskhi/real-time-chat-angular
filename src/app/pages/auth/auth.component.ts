// import { animate, state, style, transition, trigger } from '@angular/animations';
// import { Component, OnInit } from '@angular/core';
// import { Router, NavigationEnd, ActivatedRoute, Routes } from '@angular/router';
// import { AuthService } from 'src/app/core/services/auth.service';

// @Component({
//   selector: 'app-auth',
//   templateUrl: './auth.component.html',
//   styleUrls: ['./auth.component.scss'],
//   animations: [
//     trigger('stepperAnimation', [
//       state('hide', style({
//         transform: 'scale(0)',
//         opacity: 0
//       })),
//       state('show', style({
//         transform: 'scale(1)',
//         opacity: 1
//       })),
//       transition('hide => show', animate('300ms ease-in')),
//       transition('show => hide', animate('300ms ease-out'))
//     ])
//   ]
// })
// export class AuthComponent implements OnInit {
//   navLinks: any[];
//   tabChangedIndex: number = 0;

//   constructor(private router: Router, private route: ActivatedRoute) {
//     this.navLinks = [
//       { label: 'Login', link: './login', index: 0 },
//       { label: 'Register', link: './register', index: 1 }
//     ];
//   }
//   ngOnInit(): void {
//     // this.router.events.subscribe((event) => {
//     //   if (event instanceof NavigationEnd) {
//     //     this.updateSelectedTabManual();
//     //   }
//     // });
  
//     // this.route.url.subscribe(() => {
//     //   this.updateSelectedTabManual();
//     // });
//   }

//   // tabChanged(event: any): void {
//   //   if (event.index === 0) {
//   //     this.router.navigate(['/auth/login']);
//   //   } else if (event.index === 1) {
//   //     this.router.navigate(['/auth/register']);
//   //   } else if (event.index === -1) {
//   //     this.router.navigate(['/']); // Replace with your home route
//   //     this.tabChangedIndex = 0;
//   //   }
//   // }
//   // updateSelectedTabManual(): void {
//   //   const currentRoute = this.route.firstChild?.routeConfig?.path;
//   //   if (currentRoute === 'login') {
//   //     this.tabChangedIndex = 0;
//   //     this.tabChanged(0);
//   //   } else if (currentRoute === 'register') {
//   //     this.tabChangedIndex = 1;
//   //     this.tabChanged(1);
//   //   }
//   // }
// }
// //   tabChangedIndex!:number
// //   constructor(private router: Router, private route: ActivatedRoute,public authService: AuthService,) {}

  
// //   ngOnInit(): void {
// //     this.router.events.subscribe((event) => {
// //       if (event instanceof NavigationEnd) {
// //         this.updateSelectedTabManual();
// //       }
// //     });

// //     this.route.firstChild?.url.subscribe((res) => {
// //       this.updateSelectedTabManual();
// //     });

// //   }

// //   updateSelectedTabManual(): void {
// //     const currentRoute = this.route.firstChild?.routeConfig?.path;

// //     console.log(currentRoute)
// //     if (currentRoute === 'login') {
// //       this.tabChangedIndex = 0
// //       this.tabChanged(0)
// //     } else if (currentRoute === 'register') {
// //       this.tabChangedIndex = 1
// //       this.tabChanged(1)
// //     }
// //   }

// //   tabChanged(index: number): void {
// //     this.tabChangedIndex = index;

// //     if (index === 0) {
// //       this.router.navigate(['/auth/login']);
// //     } else if (index === 1 ) {
// //       this.router.navigate(['/auth/register']);
// //     }
// //   }
// // }

import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  animations: [
    trigger('stepperAnimation', [
      state('hide', style({
        opacity: 0,
        transform: 'translateX(-100%)'
      })),
      state('show', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('hide => show', animate('300ms ease-in')),
      transition('show => hide', animate('300ms ease-out'))
    ])
  ]
})
export class AuthComponent {
  navLinks: any[];
  tabChangedIndex: number = 0;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.navLinks = [
      { label: 'Login', link: './login', index: 0 },
      { label: 'Register', link: './register', index: 1 }
    ];
  }

  tabChanged(index: number) {
    this.tabChangedIndex = index;
  }
}