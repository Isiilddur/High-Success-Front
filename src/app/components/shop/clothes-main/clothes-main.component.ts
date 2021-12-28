import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'clothes-main',
  templateUrl: './clothes-main.component.html',
  styleUrls: ['./clothes-main.component.css']
})
export class ClothesMainComponent implements OnInit {

  constructor() { }
  images: any;
  ngOnInit(): void {
    this.images = ["1++1.png", "1++2.png", "1++3.png"]
  }

}
