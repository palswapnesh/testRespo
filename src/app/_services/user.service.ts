import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { environment } from '@environments/environment';
import { User } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }
     reqHeader = new HttpHeaders({ 'Access-Control-Allow-Origin': '*','Content-Type':'application/x-www-form-urlencoded' });

    register(user: User) {   
        var userData = "Email=" + user.Email + "&Password=" + user.Password + "&ConfirmPassword="+user.ConfirmPassword;
        return this.http.post(`http://localhost:53117/api/Account/Register`, userData,{ headers:this.reqHeader });
    }

    getUserDetails()
    {
        return this.http.get(`http://localhost:53117/api/test/GetUsers`);
    }
}