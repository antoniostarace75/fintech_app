import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SignInComponent} from "./views/sign-in.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {RegisterComponent} from "./views/register.component";
import {LoginComponent} from "./views/login.component";
import {MaterialModule} from "./shared/material.module";
import {RouterModule,Routes} from "@angular/router";
import {CardListComponent} from "./views/card-list.component";
import {CardFormComponent} from "./views/card-form.Component";
import {MovementsComponent} from "./views/movements.Component";
import {MatExpansionModule} from '@angular/material/expansion';
import {MovementComponent} from "./views/movement.Component";
import {MenuFormComponent} from "./views/menu-form.component";
import {HomeComponent} from "./views/home.component";


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    RegisterComponent,
    LoginComponent,
    CardListComponent,
    CardFormComponent,
    MovementsComponent,
    MovementComponent,
    MenuFormComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MaterialModule,
    MatExpansionModule,
    RouterModule.forRoot([

      {path: 'card-list',component: CardListComponent},
      {path: 'card-form',component:CardFormComponent},
      {path:'movements',component:MovementsComponent},
      {path:'home',component:HomeComponent},
      {path:'sign-inn',component:SignInComponent},
      {path:'menu-form',component:MenuFormComponent}
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
