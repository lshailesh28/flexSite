import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  show= false;
  constructor() { }

  ngOnInit() {
  }

  showdrawer(){
      this.show = !this.show
      // console.log(this.show)
  }
}
