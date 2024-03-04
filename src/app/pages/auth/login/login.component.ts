import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from 'src/app/core/services/user-service/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/core/services/auth-service/auth-service.service';
import { tap } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  providers: [AuthService, MatSnackBar],
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule,MatToolbarModule,MatCardModule,
ReactiveFormsModule,CommonModule],
})
export class LoginComponent {
  hide = true;
  get getEmail(){
    return this.form.get('email')
  }
  get getPassword(){
    return this.form.get('password')
  }
 constructor(private authService: AuthService, private router: Router){}
  form: FormGroup = new FormGroup(
    {
      email: new FormControl('',[
        Validators.required,
        Validators.email]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10)
      ])
    })

    submit(){
      this.form.markAllAsTouched()
      if(this.form.invalid)return;

        this.authService.login(this.form.value).pipe(
          tap(() => this.router.navigate(['private/dashboard']))
        ).subscribe()
    }
}
