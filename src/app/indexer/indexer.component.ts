import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
//import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-indexer',
  templateUrl: './indexer.component.html',
  styleUrls: ['./indexer.component.scss']
})
export class IndexerComponent implements OnInit {

  limit = 100;
  arrBiirds: any[];
  term: string;
  //lastupdatedon;

  constructor(private service: ApiServiceService) {

    //this.service.getIndex().subscribe(res => console.log(res))
    this.service.setlimit(this.limit);
    //this.arrBiirds=this.service.arrBirds;
  }

  ngOnInit(): void {
  }


  public onChange(event): void {
    this.setLimit(event);
    this.service.setlimit(this.limit);
  }

  ngDoCheck() {
    this.arrBiirds = this.service.arrBirds;
    //this.lastupdatedon=this.arrBiirds[1].last_update;
  }

  setLimit(event) {
    this.limit = event.target.value;


  }


}
