import { Component, OnInit } from '@angular/core';
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
  constructor( private shoppies:ShoppiesService, private toastr:ToasterService) { }

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
  this.toastr.success(`${movie.Title}(${movie.Year}) added to Nominations List`)
 this.nominations.push(movie)


}

}

}
