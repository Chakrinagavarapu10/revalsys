import { NgModule } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    ProductsComponent,
    HeaderComponent

  ],
  imports: [
    ProductsRoutingModule,
    CommonModule,
    HttpClientModule
  ],
  exports : [ HeaderComponent]
})
export class ProductsModule { }
