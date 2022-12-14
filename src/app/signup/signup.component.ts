import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';



import { UserServiceService } from '../shared/user-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent  {
  public registerform : FormGroup | any;

constructor(
  public formbuilder:FormBuilder,
  public UserManagementService:UserServiceService,
  public  ToastrService:ToastrService
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
  
    let userFromValues = this.registerform.value;
    this.UserManagementService.registerUser(userFromValues).subscribe((res:any) => {
      res;
      this.ToastrService.success("Registered Successfully")
      this.registerform.reset();
    })
  }
  
}

