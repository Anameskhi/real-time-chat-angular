import { BehaviorSubject, Observable, Subject, catchError, tap, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { IUser } from '../../interfaces/user.interface';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService{

  create(user: IUser):Observable<IUser>{
    return this.post<IUser>('users', user).pipe(
      tap((createdUser: IUser) => this.snackBar.open(`User ${createdUser.username} created successfully`, 'Close', {
        duration: 2000, horizontalPosition: 'right', verticalPosition: 'top'
      })),
      catchError( e => {
        this.snackBar.open(`User could not be created: Dues to ${e.error.message}`, 'Close', {
          duration: 5000, horizontalPosition: 'right', verticalPosition: 'top'
        })
        return throwError(e)
      })
    )
  }

  login(): Observable<any>{
    return this.get('users/login')
  }

}
