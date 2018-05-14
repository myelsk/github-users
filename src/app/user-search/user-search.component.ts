import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

    getSearchLogin(value: string) {
        this.userService.getLogin(value);
    }

constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
