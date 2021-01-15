import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ShoppiesService } from '../service/shoppies.service';
import { Shoppies } from '../shoppies';

@Component({
  selector: 'app-shoppies',
  templateUrl: './shoppies.component.html',
  styleUrls: ['./shoppies.component.css']
})
export class ShoppiesComponent implements OnInit {
 // searchGroup:FormGroup
 // private search:FormControl
movieList:any=[]

nominations:any=[]
searchTerm:string
  constructor( private shoppies:ShoppiesService) { }

  ngOnInit(): void {
/*this.shoppies.getMovies().subscribe(data=>{
  console.log(data);

})*/


  }
/* searchMovies(searchTerm){
    this.shoppies.getMovies(searchTerm).subscribe(list=>{
      this.movieList=list
      console.log(this.movieList);


    })
  }*/
  searchMovies(search){
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
return this.nominations.push(movie)

}

}

}
