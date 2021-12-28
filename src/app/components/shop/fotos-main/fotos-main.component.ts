import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fotos-main',
  templateUrl: './fotos-main.component.html',
  styleUrls: ['./fotos-main.component.css']
})
export class FotosMainComponent implements OnInit {
  images: any;

  constructor() {
    this.images = ["foto1.png", "foto2.png", "foto3.png"]
  }
  ngOnInit(): void {
  }

}
