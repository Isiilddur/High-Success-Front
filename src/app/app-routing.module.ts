import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./components/main/main.component";
import {MainShopComponent} from "./components/shop/main-shop/main-shop.component";

const routes: Routes = [
  {path: 'prueba', component: MainComponent},
  {path: 'shop', component: MainShopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
