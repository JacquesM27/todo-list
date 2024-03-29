import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  config: { [key: string]: string} | null = null;

  editMode = false;
  taskName = 'Sugerowane zadanie codzienne: odkurzanie';
  taskDate = '';

  tasks: Task[] = [
    {
      name: 'Siłownia',
      deadline: '2022-02-20',
      done: false
    },
    {
      name: 'Nauka angulara',
      deadline: '2022-02-21',
      done: false
    },
    {
      name: 'Sprzątanie mieskzania',
      deadline: '2022-02-22',
      done: true
    }
  ];

  constructor() {
    setTimeout( () => {
      this.config = {
        title: 'Lista zadań',
        footer: ' Lista zadań zbudowana w angularze',
        date: new Date().toDateString()
      };
    }, 500);
    this.sortTasks();
  }

  clearTasks() {
    this.tasks = [];
  }

  // onKeyUp(event: KeyboardEvent ){
  //   const target = event.target as HTMLInputElement;
  //   //console.log(target.value);
  //   this.taskName = target.value;
  // }

  createTask(){
    const task: Task = {
      name: this.taskName,
      //name,
      //name: name,
      //deadline: '2022-02-14',
      //deadline,
      deadline: this.taskDate,
      done: false
    };
    this.tasks.push(task);
    this.taskName = '';
    this.taskDate = '';
    this.sortTasks();
  }

  switchEditMode() {
    this.editMode = !this.editMode;
  }

  markTaskAsDone(task: Task) {
    task.done = true;
    this.sortTasks();
  }

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter(e => e !== task);
    this.sortTasks();
  }

  private sortTasks() {
    this.tasks = this.tasks.sort((a: Task,b: Task) => 
      a.done === b.done ? 0 : a.done ? 1 : -1
    );
  }

}
