import { Component } from '@angular/core';
import {TestService} from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  responseTest: any;

  constructor(private t: TestService){}
  
  public ngOnInit(){
    this.t.test().subscribe(
      sucess =>{console.log(sucess)
      this.responseTest = sucess["asd"]},
      err =>{console.log(err)}
    )
  }
}
