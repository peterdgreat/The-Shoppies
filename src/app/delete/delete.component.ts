import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
nominated:any=[]
@Input() title:any
  constructor() { }

  ngOnInit(): void {
  }

}
