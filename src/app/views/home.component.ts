import { Component,EventEmitter,Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import {User} from "../models/user";

@Component({
  selector:`<app-home></app-home>`,
  template:`
    <div><router-outlet></router-outlet></div>

   <div class="container pt-5">
     <h1 style="text-align: center">Benvenuti</h1>
   </div>
  `,
  styles: [
    `
  `,
  ],
})

export class HomeComponent {

}
