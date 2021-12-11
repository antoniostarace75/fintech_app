import {Component, EventEmitter, Output} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Mode} from "../models/mode";
import {FormBuilder, Validators} from "@angular/forms";
import {User} from "../models/user";



@Component({
  selector: 'app-login',
  template: `
  <mat-card>
    <form [formGroup]="form" (ngSubmit)="onSubmit()">

      <div class="container pt-5">
        <mat-form-field class="example-full-width"  appearance="fill">
          <mat-label>Email</mat-label>
          <input matInput formControlName="email" placeholder="email" required email>
          <button mat-icon-button matSuffix (click)="hide = !hide" [attr.aria-label]="'Hide password'" [attr.aria-pressed]="hide">
            <mat-icon>perm_identity</mat-icon>
          </button>
        </mat-form-field>


      <mat-form-field class="example-full-width"  appearance="fill">
        <mat-label>Password</mat-label>
        <input matInput [type]="hide ? 'password' : 'text'" formControlName="password">
        <button mat-icon-button matSuffix (click)="hide = !hide" [attr.aria-label]="'Hide password'" [attr.aria-pressed]="hide">
          <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>
        </button>
      </mat-form-field>
      <button routerLink="/menu-form" mat-raised-button color="primary" type="submit">Accedi</button>

      <br>
      <br>
        <button (click)="load()" mat-button>Crea un nuovo account</button>
      </div>

   <div class="container" *ngIf="show">
     <mat-form-field   class="example-full-width"  appearance="fill">
       <mat-label>Nome</mat-label>
       <input matInput formControlName="nome">
     </mat-form-field>

     <mat-form-field class="example-full-width"  appearance="fill">
       <mat-label>Cognome</mat-label>
       <input matInput formControlName="surname">
     </mat-form-field>



     <mat-form-field class="example-full-width" appearance="fill">
       <mat-label>Password</mat-label>
       <input matInput [type]="hide ? 'password' : 'text'" formControlName="password">
       <button mat-icon-button matSuffix (click)="hide = !hide" [attr.aria-label]="'Hide password'" [attr.aria-pressed]="hide">
         <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>
       </button>
     </mat-form-field>

     <mat-form-field class="example-full-width"  appearance="fill">
       <mat-label>Conferma password</mat-label>
       <input matInput [type]="hide ? 'password' : 'text'" formControlName="password">
       <button mat-icon-button matSuffix (click)="hide = !hide" [attr.aria-label]="'Hide password'" [attr.aria-pressed]="hide">
         <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>
       </button>
     </mat-form-field>

     <button mat-raised-button color="primary" type="submit">Registrati</button>

     <br>
     <br>
     <button (click)="load()" mat-button>Crea un nuovo account</button>

   </div>

    </form>
  </mat-card>

  `,
  styles: [
    `
      mat-form-field {
        width: 100%;
      }
  `,
  ],

})
export class LoginComponent {
  showMe:boolean=false;
  show=false;
  hide = false;

  form = this.fb.group({
    email: ['', [Validators.required, Validators.minLength(3)]],
    password: ['',[Validators.required,Validators.minLength(4)]],
    surname: ['', [Validators.required, Validators.minLength(3)]],
    nome: ['', [Validators.required, Validators.minLength(3)]],
    password2: ['', [Validators.required, Validators.minLength(3)]],
    passwordCheck: ['', [Validators.required]],

  });


  @Output() newUser = new EventEmitter<User>();

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    this.newUser.emit(this.form.value);
    console.log(this.form)
  }
  onReset(){
    console.log(this.form.reset)
  }

 toggleTag(){
    this.show=!this.show;
 }
 load(){
   this.show=!this.show;
 }
}
