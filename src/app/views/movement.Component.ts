import { Component,EventEmitter,Output,ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Movement } from '../models/movement';

@Component({
  selector: `
  <app-movement></app-movement>

  `,
  template: `
  <mat-accordion>
    <mat-expansion-panel hideToggle>

      <p>This is the primary content of the panel.</p>
    </mat-expansion-panel>
    <mat-expansion-panel (opened)="panelOpenState = true">
      (closed)="panelOpenState = false">
      <mat-expansion-panel-header>
        <mat-panel-title>
          {{currentDate | date:'yyyy-MM-dd'}}
          {{title | json}}
          {{amount | json}}
          {{type | json}}
        </mat-panel-title>
        <mat-panel-title>
          {{title | json}}
        </mat-panel-title>
        <mat-panel-description>

        </mat-panel-description>
      </mat-expansion-panel-header>

    </mat-expansion-panel>
  </mat-accordion>
  `,
  styles: [`
    .mat-button, .mat-icon-button, .mat-stroked-button, .mat-flat-button{
      width:100%;
    }
  `],

})
export class MovementComponent {
  panelOpenState = false;
  currentDate = new Date();
  amount = '€500';
  type = 'in';
  title ='Lorem hpsum';
}
