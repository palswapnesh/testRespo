import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { User } from '@app/_models';
import { UserService, AuthenticationService,AlertService } from '@app/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
usersDetails:any=[];
    constructor(private userService:UserService,private alertService:AlertService){}

    ngOnInit() {
       
    }
getUser(){
    this.userService.getUserDetails()
    .pipe(first())
    .subscribe(
        data => {
            this.usersDetails=data;
        },
        error => {
            this.alertService.error(error);
        });
}
upDateUser(userData)
{
debugger;
}
  
}