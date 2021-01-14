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

}
