import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 public name = 'Login';
 public email:string;
 public password:String;

  GetLogin()
  {
    debugger;
    alert(this.email);
    alert(this.password);
  }
}
