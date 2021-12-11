import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./views/login.component";
import {RegisterComponent} from "./views/register.component";
import {SignInComponent} from "./views/sign-in.component";
import {CardListComponent} from "./views/card-list.component";
import {MenuFormComponent} from "./views/menu-form.component";
import {MovementsComponent} from "./views/movements.Component";




@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: 'views',component:SignInComponent},
      {path:'views',component:CardListComponent},
      {path:'views',component:SignInComponent},
      {path:'views',component:MovementsComponent},
      {path:'views',component:MenuFormComponent}
    ])
    ]
   ,
  exports: [RouterModule]
})
export class AppRoutingModule { }
