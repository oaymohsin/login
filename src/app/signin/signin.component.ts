import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
public signinform :FormGroup | any;
constructor(public formbuilder:FormBuilder){
this.formmodel();
}
formmodel(){
  this.signinform=this.formbuilder.group({
    email:new FormControl(''),
    password: new FormControl(''),
  })
}
login(){
  this.signinform.controls;
}
}
