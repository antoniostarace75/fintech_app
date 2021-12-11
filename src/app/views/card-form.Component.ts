import {Component, EventEmitter, Output} from "@angular/core";
import {FormBuilder, Validators,AbstractControl} from "@angular/forms";
import { Carte } from "../models/card_form";

@Component({
  selector:'</app-card-form>',
  template:`
  <div class="container pt-5">
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <mat-form-field appearance="fill">
        <mat-label>Tipi di carte</mat-label>
        <select matNativeControl formControlCard="cards" required formControlName="carte">
          <option value="visa">Visa</option>
          <option value="mastercard">Mastercard</option>
        </select>
      </mat-form-field>

      <mat-form-field class="example-full-width"  appearance="fill">
        <mat-label>Nome</mat-label>
        <input matInput formControlName="nome" required="nome">
      </mat-form-field>

      <mat-form-field class="example-full-width"  appearance="fill">
        <mat-label>Cognome</mat-label>
        <input matInput formControlName="surname"  required="surname">
      </mat-form-field>

      <mat-form-field class="example-full-width"  appearance="fill">
        <mat-label>N° carta</mat-label>
        <input matInput formControlName="card_number" required="card_number">
      </mat-form-field>

      <mat-form-field class="example-full-width"  appearance="fill">
        <mat-label>Codice di sicurezza</mat-label>
        <input matInput formControlName="security_code"  required="security_code">
      </mat-form-field>
      <button mat-raised-button color="primary" type="submit">Aggiungi carta</button>
      <button (click)="onReset()" mat-button color="warn" type="submit">Annulla</button>
    </form>
  </div>
  <style>
    .material-icons{
      float: right;
    }

    .mat-flat-button.mat-primary, .mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {
      background-color: #3f51b5;
      width: 100%;
    }
  </style>

  `,
  styles:[
    `
      mat-form-field {
        width: 100%;
      }
      .mat-raised-button:not([class*=mat-elevation-z]) {
        box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
        width: 100%;
      }
      .mat-button.mat-warn, .mat-icon-button.mat-warn, .mat-stroked-button.mat-warn {
        color: #f44336;
        width: 100%;
      }
    `

  ],
})
export class CardFormComponent{
  form = this.fb.group({
    carte:['',[Validators.required]],
    nome: ['',[Validators.required,Validators.minLength(3)]],
    surname: ['',[Validators.required,Validators.minLength(3)]],
    card_number: ['', [Validators.required, Validators.minLength(16)]],
    security_code: ['',[Validators.required,Validators.minLength(3)]]
  });

  @Output() Cards_new = new EventEmitter<Carte>();

  constructor(private fb: FormBuilder) {}
  onSubmit() {
    this.Cards_new.emit(this.form.value);
    console.log(this.form)
  }
  onReset(){
    console.log(this.form.reset)
  }
}
