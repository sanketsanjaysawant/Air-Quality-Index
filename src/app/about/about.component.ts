import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  goBack: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


  setGoBack() {
    this.goBack = !this.goBack;
  }


}
