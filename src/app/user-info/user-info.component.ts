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

  message: string;
  user: object;
  error: string;


  goBack(): void {
    this.location.back();
  }

  ngOnInit() {

    this.userService.currentLogin.subscribe(message => this.message = message);


    this.userService.getUserInfo('https://api.github.com/users/' + this.message).subscribe(
      data => this.user = data,
    );
  }

}
