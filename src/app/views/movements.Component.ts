import { Component,EventEmitter,Output,ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Movement } from '../models/movement';

@Component({
  selector: `
  <app-movements></app-movements>

  `,
  template: `
   <div class="container pt-5">
     <mat-accordion>
       <mat-form-field appearance="fill">
         <mat-label>Selezionare una carta<br>222222222222  </mat-label>
         <mat-select>
           <mat-option value="one"></mat-option>
         </mat-select>
       </mat-form-field>
       <div><mat-label>Saldo € 2000</mat-label></div>
       <br>

     </mat-accordion>
     <br>
     <button mat-stroked-button color="basic">Carica altro</button>
   </div>
  `,
  styles: [`
    .mat-button, .mat-icon-button, .mat-stroked-button, .mat-flat-button{
      width:100%;
    }
  `],

})
export class MovementsComponent {
  panelOpenState = false;
  currentDate = new Date();
  amount = '€500';
  type = 'in';
  title ='Lorem hpsum';
}

