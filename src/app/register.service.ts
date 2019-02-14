import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private userUrl = 'http://localhost:8089/api/v1/user';
  constructor(private http: HttpClient) { }

  addUserDeatails(userDetails){
  return this.http.post(this.userUrl,userDetails);
  }
}
