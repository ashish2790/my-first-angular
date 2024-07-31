import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { DUMMY_TASKS } from '../dummy-tasks';
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTaskData } from './task/task.model';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

@Input({required:true}) userId!:string;
@Input({required:true}) name!:string;
  tasks = DUMMY_TASKS;
  isAddingTask:boolean = false;

  get selectedUserTask(){
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task)=> task.id !== id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskData) {
    this.tasks.unshift({
      id : new Date().getTime.toString(),
      dueDate: taskData.date,
      summary: taskData.summary,
      title: taskData.title,
      userId: this.userId
    })
    this.isAddingTask = false;
  }

}
