import { Component, Input } from '@angular/core';
import { NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  constructor(private taskService: TasksService) {}

  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask: boolean = false;

  get selectedUserTask() {
    return this.taskService.getUserTask(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskData) {
    this.taskService.addTask(taskData, this.userId);
    this.isAddingTask = false;
  }
}
