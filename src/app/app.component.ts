import { Component, OnInit } from '@angular/core';
import { TestService } from './core/services/test.service';
import { Observable } from 'rxjs';
import { Test } from './core/interfaces/test.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  constructor(
    private testSrvc: TestService
  ){}

  testValue: Observable<Test> = this.testSrvc.getTest()
  ngOnInit(): void {
    this.testSrvc.getTest().subscribe(res=> console.log(res))
  }
}
