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

 this.nominations.push(movie)
  console.log(this.nominations);

}
receiveMovie($event){

this.nominations.push($event)

console.log(this.nominations);
  //this.nominations=$event
}
}
