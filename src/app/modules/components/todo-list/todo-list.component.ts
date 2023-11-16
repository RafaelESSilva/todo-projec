import { Component } from '@angular/core';
import { TaskList } from '../../model/TaskList';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent  {

 public setEmitTaskList(event: String) {
  this.taskList.push({ task:event, check: false });

}
  public taskList: Array<TaskList>=[

  ];

  public deleteItemTaskList(event:number){
    this.taskList.splice(event,1);
  }
  public deleteAllTaskList(){
    this.taskList=[];
  }


}
