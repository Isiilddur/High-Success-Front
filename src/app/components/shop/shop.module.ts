import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainShopComponent } from './main-shop/main-shop.component';
import { NavBarShopComponent } from './nav-bar-shop/nav-bar-shop.component';
import {IgxIconModule, IgxInputGroupModule, IgxNavbarModule} from "igniteui-angular";


@NgModule({
  declarations: [
    MainShopComponent,
    NavBarShopComponent
  ],
  imports: [
    CommonModule,
    IgxNavbarModule,
    IgxIconModule,
    IgxInputGroupModule
  ]
})
export class ShopModule { }
