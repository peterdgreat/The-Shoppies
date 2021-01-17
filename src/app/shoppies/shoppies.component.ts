import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from '../service/modal.service';
import { ShoppiesService } from '../service/shoppies.service';
import { ToasterService } from '../service/toastr.service';

@Component({
  selector: 'app-shoppies',
  templateUrl: './shoppies.component.html',
  styleUrls: ['./shoppies.component.css']
})
export class ShoppiesComponent implements OnInit {

movieList:any=[]
showSpinner=false;
nominations:any=[]
searchTerm:string
closeResult:string
  constructor( private shoppies:ShoppiesService, private toastr:ToasterService,private modalService:NgbModal) { }

  ngOnInit(): void {



  }

  searchMovies(search){
    this.showSpinner=true
    setTimeout(()=>{
      this.showSpinner=false;
    },1500)
    this.shoppies.getMovies(search).subscribe(list=>{
     this.movieList=list

      console.log(this.movieList);


    })
  }
nominate(movie){
if(this.nominations.includes(movie) || this.nominations.length===5) {

  return ''

}else{

  console.log(this.nominations);
  this.toastr.success(`${movie.Title}(${movie.Year}) added to Nominations`)
 this.nominations.push(movie)


}

}

  open(content) {
    if(this.nominations.length===5){


    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
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

}
