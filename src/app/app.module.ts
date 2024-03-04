import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './pages/auth/auth.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponent } from './features/main-layout/main-layout.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule, MatToolbarRow} from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/private/dashboard/dashboard.component';
// import { JwtModule } from '@auth0/angular-jwt';

export function tokenGetter(){
  return localStorage.getItem("Token")
}
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    MainLayoutComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatStepperModule,
    CommonModule,
    // JwtModule.forRoot({
    //   config: {
    //     tokenGetter: tokenGetter,
    //     allowedDomains: ['localhost:3000']
    //   }
    // })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
