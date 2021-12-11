import { Component,EventEmitter,Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../models/user';
import { RouterModule } from '@angular/router';
@Component({
  selector: `
  <app-sign-in></app-sign-in>

  `,
  template: `
   <div class="container pt-5">
     <mat-card-content>
       <form [formGroup]="form" (ngSubmit)="onSubmit()">
         <mat-form-field class="example-full-width"  appearance="fill">
           <mat-label>Email</mat-label>
           <input matInput formControlName="email" placeholder="email" required email>
         </mat-form-field>

         <mat-form-field class="example-full-width"  appearance="fill">
           <mat-label>Password</mat-label>
           <input matInput formControlName="password" [type]="hide ? 'password' : 'text'">
           <button mat-icon-button matSuffix (click)="hide = !hide" [attr.aria-label]="'Hide password'" [attr.aria-pressed]="hide">
             <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>
           </button>
         </mat-form-field>

         <button mat-raised-button color="primary"><a routerLink="/menu-form"></a>Accedi</button>
        
         <br>
         <br>
         <a href="">Crea un nuovo account</a>
       </form>
     </mat-card-content>
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
  styles: [
    `
    mat-form-field {
      width: 100%;
    }
  `,
  ],

})
export class SignInComponent {

  form = this.fb.group({
    email: ['', [Validators.required, Validators.minLength(3)]],
    password: ['',[Validators.required,Validators.minLength(4)]]

  });

  hide = true;

  @Output() newUser = new EventEmitter<User>();

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    this.newUser.emit(this.form.value);
    console.log(this.form)
  }
  onReset(){
    console.log(this.form.reset)
  }
  }


