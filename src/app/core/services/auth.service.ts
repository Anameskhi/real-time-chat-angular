import { BehaviorSubject, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private selectedTabIndexSubject = new BehaviorSubject<number>(0);
  selectedTabIndex$ = this.selectedTabIndexSubject.asObservable();
  currentRoute$ = new Subject()
  updateSelectedTabIndex(index: number): void {
    this.selectedTabIndexSubject.next(index);
  }
  constructor() {
    // Set a default value (login tab) when the service is initialized
    this.selectedTabIndexSubject.next(0);
  }
}
