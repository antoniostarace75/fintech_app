import {Component, EventEmitter, Output} from "@angular/core";
import { Card } from '../models/card';
import {FormBuilder, Validators} from "@angular/forms";
import {User} from "../models/user";
@Component({
selector:'app-card-list',
template:`
<div class="container pt-5">
  <form [formGroup]="form"(ngSubmit)="onSubmit()">
    <mat-card>
      <mat-card-header>
        <mat-card-title>
          Carte
        </mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <div class="row">
          <div class="col-sm-12">

          </div>
          <div class="col-sm-12">
            <mat-form-field>
              <input matInput formControlName="card1">
              <mat-icon aria-hidden="false" aria-label="Example home icon"></mat-icon>
              <button matSuffix mat-icon-button aria-label id="movements" matTooltip="Vedi movimenti">
                <mat-icon>receipt_long</mat-icon>
              </button>
              <button matSuffix mat-icon-button aria-label  matTooltip="Delete">
                <mat-icon>delete</mat-icon>
              </button>
            </mat-form-field>
          </div>
          <div class="col-sm-12">

            <mat-form-field>
              <input matInput formControlName="card2">
              <mat-icon aria-hidden="false" aria-label="Example home icon"></mat-icon>
              <button matSuffix mat-icon-button aria-label id="movements" matTooltip="Vedi movimenti">
                <mat-icon>receipt_long</mat-icon>
              </button>
              <mat-icon aria-hidden="false" aria-label="Example home icon"></mat-icon>
              <button matSuffix mat-icon-button aria-label matTooltip="Delete">
                <mat-icon>delete</mat-icon>
              </button>
            </mat-form-field>
          </div>
          <div class="col-sm-12">
            <mat-card-actions>
              <button (click)="onSubmit()" mat-stroked-button color="link">Aggiungi</button>
            </mat-card-actions>
          </div>
        </div>
      </mat-card-content>
      <mat-card-actions>

      </mat-card-actions>
    </mat-card>
  </form>
</div>

<style>
  .material-icons{
    float: right;
  }
  .mat-icon-button {
    font-size: 20px !important;
  }
  .mat-flat-button.mat-primary, .mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {
    background-color: #3f51b5;
    width: 100%;
  }
  .mat-card-actions .mat-button, .mat-card-actions .mat-raised-button, .mat-card-actions .mat-stroked-button {
    margin: 0 8px;
    width: 100%;
  }
  .mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button .mat-icon, .mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button .mat-icon {

    font-size: 20px;
  }

</style>

`,
  styles: [
    `
      mat-form-field {
        width: 100%;
      }
    `,
  ],
})


export class CardListComponent {
  card: Card[] = [];
  form = this.fb.group({
    card1: ['1111111111 €2000-mastercard'],
    card2: ['22222222 €2000-visa']

  });
  constructor(private fb: FormBuilder) {}
  @Output() newUser = new EventEmitter<User>();
  onSubmit(){
    this.newUser.emit(this.form.value);
    console.log(this.form)
  }
}
