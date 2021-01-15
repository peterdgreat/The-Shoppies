import { Component, Input, OnInit } from '@angular/core';
import { ShoppiesService } from '../service/shoppies.service';

@Component({
  selector: 'app-nominatingresults',
  templateUrl: './nominatingresults.component.html',
  styleUrls: ['./nominatingresults.component.css']
})
export class NominatingresultsComponent implements OnInit {
@Input ()data:any
  constructor(private shoppies:ShoppiesService) { }

  ngOnInit(): void {

  }
  delete(titles){
    //UI
// this.nominated=this.nominated.filter(t=>t.id !==todo.id)
  //service
  //this.todoservice.deleteTodo(todo).subscribe()
  for(let i=0; i<this.data.length; i++){
    if(titles===this.data[i]){
   return   this.data.splice(i,1)
    }

  }
  }
}
