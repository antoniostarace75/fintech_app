import { Component,EventEmitter,Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../models/user';

@Component({
  selector: `
  <app-register></app-register>
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
           <mat-label>Nome</mat-label>
           <input matInput formControlName="nome">
         </mat-form-field>

         <mat-form-field class="example-full-width"  appearance="fill">
           <mat-label>Cognome</mat-label>
           <input matInput formControlName="surname">
         </mat-form-field>

         <mat-form-field class="example-full-width"  appearance="fill">
           <mat-label>Password</mat-label>
           <input matInput [type]="mostra ? 'password' : 'text'" formControlName="password">
           <button mat-icon-button matSuffix (click)="mostra = !mostra" [attr.aria-label]="'mostra'" [attr.aria-pressed]="mostra">
             <mat-icon>{{mostra ? 'visibility_off' : 'visibility'}}</mat-icon>
           </button>
         </mat-form-field>

         <mat-form-field class="example-full-width"  appearance="fill">
           <mat-label>Conferma password</mat-label>
           <input matInput [type]="conferma ? 'password' : 'text'" formControlName="conferma">
           <button mat-icon-button matSuffix (click)="conferma = !conferma" [attr.aria-label]="'conferma'" [attr.aria-pressed]="conferma">
             <mat-icon>{{conferma ? 'visibility_off' : 'visibility'}}</mat-icon>
           </button>
         </mat-form-field>
         <button mat-raised-button color="primary" type="submit">Registrati</button>

         <br>
         <br>
         <a href="">Hai gia' un account? Accedi</a>
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
export class RegisterComponent {
  mostra = true;
  conferma = true;

  form = this.fb.group({
    email: ['', [Validators.required, Validators.minLength(3)]],
    nome: ['', [Validators.required, Validators.minLength(3)]],
    surname: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(3)]],
    conferma: ['', [Validators.required,Validators.minLength(3)]],

  });


  @Output() newRegister = new EventEmitter<User>();

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    this.newRegister.emit(this.form.value);
    console.log(this.form)
  }

}
