import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from './constant/user-data';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get(Constant.API_URL.USERS);
  }

  deleteUser(userId: any) {
    return this.http.delete(`${Constant.API_URL.USERS}/${userId}`);
  }

  getUserById(userId: any) {
    return this.http.get(`${Constant.API_URL.USERS}/${userId}`);
  }
}
