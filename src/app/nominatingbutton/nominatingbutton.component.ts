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
 isNextButton = false;
 nominations:any=[]
constructor(private shoppies:ShoppiesService) { }

  ngOnInit(): void {
  }
  setSecurity() { this.isNextButton = !this.isNextButton;}



/*nominating(message){
  this.addMovie.emit(this.nominations)

}*/
}
