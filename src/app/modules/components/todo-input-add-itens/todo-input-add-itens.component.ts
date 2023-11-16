
import { Component, EventEmitter, Output} from '@angular/core';
import { TaskList } from '../../model/TaskList';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent {
  [x: string]: any;
 @Output() public emitItemTaskList = new EventEmitter();

  public addItemTaskList : string = "";



  public submitItemTaskList(){
    if(this.addItemTaskList){
      this.emitItemTaskList.emit(this.addItemTaskList);
      this.addItemTaskList = "";
    }
  }

}
