import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  constructor(
      private userService: UserService,
      private location: Location
  ) { }

  login: string;
  user: object;


  goBack(): void {
    this.location.back();
  }

  ngOnInit() {

    this.userService.currentLogin.subscribe(login => this.login = login);


    this.userService.getUserInfo('https://api.github.com/users/' + this.login).subscribe(
      user => this.user = user,
    );
  }

}
