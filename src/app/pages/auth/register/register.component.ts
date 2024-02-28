import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { UserService } from 'src/app/core/services/user-service/user.service';
import { CustomValidators } from 'src/app/core/validators/custom-validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  providers: [UserService, MatSnackBar],
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule,MatToolbarModule,MatCardModule,
  ReactiveFormsModule,CommonModule],
})
export class RegisterComponent {
  get getUsername(): FormControl{
    return this.form.get('username') as FormControl
  }

  get getEmail(): FormControl{
    return this.form.get('email') as FormControl
  }
  get getPassword(): FormControl{
    return this.form.get('password') as FormControl
  }
  get getConfirmPassword(): FormControl{
    return this.form.get('passwordConfirm') as FormControl
  }
  form: FormGroup = new FormGroup(
    {
      username: new FormControl('',Validators.required),
      email: new FormControl('',[
        Validators.required,
        Validators.email]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10)
      ]),
      passwordConfirm: new FormControl(null,[Validators.required])

    },{validators: CustomValidators.passwordsMatching})

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  submit(){
    this.form.markAllAsTouched()
    if(this.form.invalid)return;

      console.log(this.form.value)
      this.userService.create({
        email: this.getEmail.value,
        password: this.getPassword.value,
        username: this.getUsername.value

      }).pipe(
        tap((res) => console.log(res)))
        .subscribe()

  }

}
