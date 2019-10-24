import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 public name = 'Login';
 public email:string;
 public password:String;


  callingFunction()
  {
    debugger;
    alert(this.email);
    alert(this.password);
  }
}
