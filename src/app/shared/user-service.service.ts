import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpclient:HttpClient) { }

  registerUser(payLoad:any){
      return this.httpclient.post('http://localhost:8888/userManagement/userRegister',payLoad)
  }
  loginUser(payLoad:any){
    return this.httpclient.post('http://localhost:8888/userManagement/userLogin',payLoad);
  }
  setTokenLocalStorage(payLoad:any){
    localStorage.setItem('access-token',payLoad)
  }
}
