import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent  {
  public registerform : FormGroup | any;

constructor(
  public formbuilder:FormBuilder
){this.myformbuilder()}
myformbuilder(){
  this.registerform=this.formbuilder.group({
    firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
  })
}
registeruser(){
  this.registerform;
  
}
}
