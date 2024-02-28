import { BehaviorSubject, Observable, Subject, catchError, tap, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { IUser } from '../../interfaces/user.interface';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService{

  create(user: IUser):Observable<IUser>{
    return this.post<IUser>('users', user)
  }

}
