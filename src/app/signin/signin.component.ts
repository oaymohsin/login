import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../shared/user-service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
public signinform :FormGroup | any;
constructor(
  public formbuilder:FormBuilder,
  public usermanagementservice:UserServiceService,
  public Router:Router
  ){
this.formmodel();
}
formmodel(){
  this.signinform=this.formbuilder.group({
    email:new FormControl(''),
    password: new FormControl(''),
  })
}
login(){
  let userSignInValues= this.signinform.value;
  this.usermanagementservice.loginUser(userSignInValues).subscribe((res:any) => {
    this.usermanagementservice.setTokenLocalStorage(res.Token);
    if(res.UserPrivilege === 'Admin'){
      this.Router.navigate(['/admin'])
    }else{
      
    }
  })
}
}
