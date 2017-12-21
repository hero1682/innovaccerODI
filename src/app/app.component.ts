import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';
import { HomeComponent } from './home/home.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'IMDb';
  email: string;
  password : string;
  err;
  auth:false;

  constructor(private router: Router){
  }

  dummyData = [
    new User('a@a.com','aaa'),
    new User('b@a.com','bbb')
  ]

  authenticate = function(){
    var self = this;
    this.dummyData.filter(function(user){
      return user.email === self.email
    }).map(function(user){
      if(user.password !== self.password){
        self.err='Incorrect Credentials';
      }
      else{
        self.auth = true;
        self.router.navigate(['/home',self.email]);
      }
    })
    if(!this.auth){
      this.err = 'Incorrect Credentials';
    }
  }
}


