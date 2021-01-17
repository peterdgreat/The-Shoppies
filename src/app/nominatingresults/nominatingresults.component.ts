import { Component, Input, OnInit } from '@angular/core';
import { ToasterService } from '../service/toastr.service';

@Component({
  selector: 'app-nominatingresults',
  templateUrl: './nominatingresults.component.html',
  styleUrls: ['./nominatingresults.component.css']
})
export class NominatingresultsComponent implements OnInit {
@Input ()data:any
  constructor(private toastr:ToasterService) { }

  ngOnInit(): void {

  }
  delete(titles){
   for(let i=0; i<this.data.length; i++){
    if(titles===this.data[i]){
      this.toastr.warning(`${titles.Title}(${titles.Year}) Deleted`)
   return   this.data.splice(i,1)
    }

  }
  }
}
