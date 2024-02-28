import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
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

        console.log(this.form.value)
    }
}
