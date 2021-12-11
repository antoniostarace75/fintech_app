import { Component,EventEmitter,Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector:`<app-menu-form></app-menu-form>`,
  template:`

    <mat-toolbar color="primary">
      <mat-toolbar-row>
        <button mat-icon-button>
          <mat-icon (click)="sidenav.toggle()">menu</mat-icon>
        </button>
        <div>Fintech Bank</div>

        <div class="fintech"><h1></h1></div>
      </mat-toolbar-row>
    </mat-toolbar>
    <mat-sidenav-container>
      <mat-sidenav #sidenav>
        <mat-nav-list>
          <a routerLink="/home" mat-list-item><mat-icon>home</mat-icon>Home</a>
          <a routerLink="/card-list"  mat-list-item><mat-icon>credit_card</mat-icon>Carte</a>
          <a routerLink="/movements" mat-list-item><mat-icon>receipt_long</mat-icon>Movimenti</a>
          <a mat-list-item><mat-icon>paid</mat-icon>Trasferisci</a>
          <a mat-list-item><mat-icon>event</mat-icon>Appuntamenti</a>
          <a mat-list-item><mat-icon>summarize</mat-icon>Tasse</a>
          <a mat-list-item (click)="logout()">Antonio Starace<br>Logout</a>
        </mat-nav-list>
      </mat-sidenav>
      <mat-sidenav-content>
        <div style="height:88vh">
          <router-outlet>
          </router-outlet>
        </div>
      </mat-sidenav-content>
    </mat-sidenav-container>

  `,
  styles: [
    `
    .fintech{
      margin-left: 300px;
    }
  `,
  ],
})
export class MenuFormComponent {
  logout(){
   console.log('Ok')
  }
}
