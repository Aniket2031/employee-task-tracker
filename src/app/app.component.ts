import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  fields = {
            empName: "",
            taskTitle: "",
            priority: "",
            dueDate :""
  }
  

  tasks :any[] = [];

  submit(){

    this.tasks.push({...this.fields});
    this.fields={
            empName:"",
            taskTitle:"",
            priority:"",
            dueDate :""
    }
  }

  
}
