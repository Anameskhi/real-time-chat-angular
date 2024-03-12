import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth-service/auth-service.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {
  authorized = false
  constructor(
    private router: Router,
    public snackBar: MatSnackBar

  ){}

  logout() {
    const token = localStorage.getItem('Token');
    localStorage.removeItem('Token');
    localStorage.clear();

    const redirectCallback = () => {
      this.router.navigate(['']);
      this.snackBar.open(`Logged out successfully`, 'Close', {
        duration: 2000, horizontalPosition: 'right', verticalPosition: 'top'
      });
    };

    // Check if the token was present before removal
    if (!token) {
      redirectCallback();
    } else {
      // You might want to add a delay to make sure localStorage operations are completed
      setTimeout(() => {
        if (!localStorage.getItem('Token')) {
          redirectCallback();
        } else {
          this.snackBar.open(`User could not be logged out`, 'Close', {
            duration: 5000, horizontalPosition: 'right', verticalPosition: 'top'
          });
        }
      }, 100);
    }
  }
}
