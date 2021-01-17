import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
 closeResult: string;
constructor(private shoppies:ShoppiesService,private modalService:NgbModal) { }

  ngOnInit(): void {
  }
  setSecurity() { this.isNextButton = !this.isNextButton;}


  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }


/*nominating(message){
  this.addMovie.emit(this.nominations)

}*/
}
