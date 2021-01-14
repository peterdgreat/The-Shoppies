import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShoppiesService } from '../service/shoppies.service';

@Component({
  selector: 'app-nominatingbutton',
  templateUrl: './nominatingbutton.component.html',
  styleUrls: ['./nominatingbutton.component.css']
})
export class NominatingbuttonComponent implements OnInit {
@Output() addMovie:EventEmitter<any>=new EventEmitter
 @Input() data:any
 nominations:any=[]
constructor(private shoppies:ShoppiesService) { }

  ngOnInit(): void {
  }



/*nominating(message){
  this.addMovie.emit(this.nominations)

}*/
}
