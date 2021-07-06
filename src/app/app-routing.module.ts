import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGaurd } from './auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';




const routes:Routes=[


    { 
      path:'',
      loadChildren: './login/login.module#LoginModule',
    },

    {
    path:'list',
    loadChildren: './products/products.module#ProductsModule',
    canActivate: [AuthGaurd]

    },
    
    {
    path:'feedback',
    loadChildren: './feedback/feedback.module#FeedbackModule',
    canActivate: [AuthGaurd]

    },
    {
    path:'**',
    component:PageNotFoundComponent
   }

  ]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
