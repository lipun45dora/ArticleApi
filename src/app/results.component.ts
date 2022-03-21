import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

 
results:any[]=[];
count=0;

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
    this.searchService.getPassedResults().subscribe((response:any)=>{
       this.results=response.response.docs;
        this.count=response.response.docs.length;
       console.log('Results and count', this.results,this.count);
      // console.log(this.results);
    },
    (error:any)=>{
      console.log('Error Occured',error);
    })
  }
  
}
