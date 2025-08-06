import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }
  login(user: LoginModel):Observable<SingleResponseModel<TokenModel>> {
    return this.httpClient.post<SingleResponseModel<TokenModel>>("https://localhost:44314/Api/auth/" + "login", user);
  }

  isAuthhentication(){ 
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }

}
