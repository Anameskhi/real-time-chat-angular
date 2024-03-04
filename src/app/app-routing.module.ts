import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './features/main-layout/main-layout.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',

    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'private',
    //  canActivate: [AuthGuard],
    loadChildren: () =>
    import('./pages/private/private.module').then((m) => m.PrivateModule),
  }

]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
