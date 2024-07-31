import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";

import { DUMMY_USERS } from './dummy-users';
import { User } from './user/user.model';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-angular';
  users = DUMMY_USERS;
  selectedUserID?: string;

  get selectedUser(){
    return this.users.find(user => user.id === this.selectedUserID)
  }

  onSelectedUser(selectedUser: User) {
    this.selectedUserID = selectedUser.id;
  }
}
