import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { Observable } from 'rxjs';
import { ShoppiesService } from '../service/shoppies.service';
import { Shoppies } from '../shoppies';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
@Input() data:any
@Output() addMovie:EventEmitter=new EventEmitter()
subscribe:Observable<any>

  constructor( private shoppies:ShoppiesService) { }

  ngOnInit(): void {
  }

}
