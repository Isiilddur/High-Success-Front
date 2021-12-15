import { Component, OnInit } from '@angular/core';
import {NavBarShopComponent} from "../nav-bar-shop/nav-bar-shop.component";

@Component({
  selector: 'app-main-shop',
  templateUrl: './main-shop.component.html',
  styleUrls: ['./main-shop.component.scss']
})
export class MainShopComponent implements OnInit {

  constructor(
    private navBar: NavBarShopComponent
  ) { }

  ngOnInit(): void {
  }

}
