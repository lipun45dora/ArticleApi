import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm='';
  constructor(
    private searchService:SearchService
  ) { }

  ngOnInit(): void {
  }
  searchWeb():void{
    if(this.searchTerm === '')return;
    this.searchService.getResults(this.searchTerm).subscribe(
      (response:any)=>{
      this.searchService.passResults(response)
     //this.searchService.passResults({results:response.response.docs,count:response.response.length});
    },
    (error:any)=>{
      console.log('Error Occured',error);
    }
    );
  }
}
