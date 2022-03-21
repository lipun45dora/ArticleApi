import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import {environment} from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  apikey=environment.Articles_Api_key;
  searchResults =new Subject();

  constructor(
    private http:HttpClient
  ) { }

  getResults(searchTerm:string):Observable<any>{
    return this.http
    .get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&pageNumber=1&pageSize=12&autoCorrect=true&api-key=${this.apikey}`,
    // {
    //   headers:{
    //     'x-rapidapi-key':this.apikey
    //   }
    //}
    )
  }
  passResults(results:any):void{
    this.searchResults.next(results);
  }
  getPassedResults():Observable<any>{
    return this.searchResults.asObservable();
  }
}
