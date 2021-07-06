import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { HeaderComponent } from '../header/header.component';
import { ProductsModule } from '../products/products.module';
import { FeedbackRoutingModule } from './feedback-routing.module';
import { FeedbackComponent } from './feedback.component';



@NgModule({
  declarations: [
    FeedbackComponent,
  ],
  imports: [
    FeedbackRoutingModule,
    ProductsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule
  ],
  providers: [],
})
export class FeedbackModule { }
