import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/home/detail/detail.component'

import { OrderComponent } from './components/order/order.component';
import { PesananComponent } from './components/order/pesanan/pesanan.component';
import { EditComponent } from './components/order/edit/edit.component';

const routes : Routes = [

  {
    path:"home",
    component:HomeComponent
  },

  {
    path:"home/detail/:imdbID",
    component:DetailComponent
    
  },

  {
    path:"order",
    component:OrderComponent
  },

  {
    path:"order/pesanan/:imdbID",
    component:PesananComponent
  },
  

  {
    path:"order/edit/:film/:id",
    component:EditComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
