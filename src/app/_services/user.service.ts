import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private localUrls = environment.localUrl;

  constructor(private http: HttpClient) {}

  getUserPublicContent() {
    debugger

    // return  this.http.request('post','http://localhost:8086/api/v1/user/resource', {
    //     withCredentials: true,
    //     responseType : "text"
    //   })
     

    return this.http.request('post', `${this.localUrls}/resources/user/resource`, {
      withCredentials: true,
      responseType: 'text',
    });
  } 

  getAdminPublicContent() {
    debugger; 
    return this.http.request('post', `${this.localUrls}/resources/admin/resource`, {
      withCredentials: true,
      responseType: 'text',
    });
    // return this.http.request(
    //   'get',
    //   'http://localhost:8086/api/v1/admin/resource',
    //   {
    //     withCredentials: true,
    //     responseType: 'text',
    //   }
    // );
  }
}
