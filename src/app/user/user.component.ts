import { Component, computed, EventEmitter, input, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { User } from './user.model';
import { NgClass } from '@angular/common';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgClass],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})



export class UserComponent {
  @Input({required:true}) userId!:User;
  @Input({required:true}) selected!:boolean;
  @Output() selectedUserId = new EventEmitter();
  
  //with signal
  // userId = input.required<User>();
  // imagePath = computed(() => {return 'assets/users/' + this.userId().avatar});

  get imagePath(){
    return 'assets/users/' + this.userId.avatar;
  }

  onSelectedUser(){
    return this.selectedUserId.emit(this.userId);
  }

}
