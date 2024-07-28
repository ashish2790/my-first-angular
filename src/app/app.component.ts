import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";

import { DUMMY_USERS } from './dummy-users';
import { User } from './user/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-angular';
  users = DUMMY_USERS;

  onSelectedUser(user: User){
    console.log("selected user ->" +user.name);
  }
}
