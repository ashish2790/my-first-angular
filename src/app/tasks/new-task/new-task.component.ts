import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

@Input({required:true}) userId!:string;
@Output() close = new EventEmitter<void>();
enteredTitle = '';
enteredSummary = '';
enteredDate = '';

private taskService = inject(TasksService)

onCancel() {
  this.close.emit();
}

onSubmit() {
  this.taskService.addTask({
    date: this.enteredDate,
    summary:this.enteredSummary,
    title:this.enteredTitle
  },this.userId);
  this.close.emit();
}

}
