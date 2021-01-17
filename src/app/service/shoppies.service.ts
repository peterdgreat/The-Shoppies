import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable ,of} from 'rxjs';
import {toArray} from 'rxjs/operators'
import { Shoppies } from '../shoppies';

const httpOptions={
  headers:new HttpHeaders({
    'Content-Type':'application/json'

  })}
@Injectable({
  providedIn: 'root'
})
export class ShoppiesService {
/*api:string='http://www.omdbapi.com/?s=spider&apikey=fbdac5a1'
  constructor( private http:HttpClient) { }

  getMovies(){

return this.http.get(this.api)



  }
*/


 api:string='https://www.omdbapi.com/?'
key:string='fbdac5a1'
constructor( private http:HttpClient) { }

  getMovies(searchTerm:string):Observable<Shoppies[]>{

return this.http.get<Shoppies[]>(`${this.api}s=${searchTerm}&apikey=${this.key}`)
// .pipe(
//   // convert object to array
//   toArray<Shoppies>()


//   }
  }
  /* toggleNominated(movie){
const url=`${this.api}s=${movie}&apikey=${this.key}`
const nominations:any=[]
console.log(nominations);
 nominations.push(movie)



}*/

}
