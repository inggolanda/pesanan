import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { DetailComponent } from './components/home/detail/detail.component';
import { OrderComponent } from './components/order/order.component';
import { PesananComponent } from './components/order/pesanan/pesanan.component';
import { EditComponent } from './components/order/edit/edit.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    OrderComponent,
    PesananComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
