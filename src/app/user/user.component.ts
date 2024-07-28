import { Component, computed, EventEmitter, input, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { User } from './user';


const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})



export class UserComponent {
  @Input({required:true}) userId!:User;
  @Output() selectedUser = new EventEmitter();
  
  //with signal
  // userId = input.required<User>();
  // imagePath = computed(() => {return 'assets/users/' + this.userId().avatar});

  get imagePath(){
    return 'assets/users/' + this.userId.avatar;
  }

  onSelectedUser(){
    return this.selectedUser.emit(this.userId);
  }

}
