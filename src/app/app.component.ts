import { Component } from '@angular/core';
import {User} from "./models/user";
import {Register} from "./models/register";

@Component({
  selector: 'app-root',
  template:`

    <app-menu-form></app-menu-form>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users: User[] = [];

  addUser(user: User) {
    this.users = [...this.users, user];
  }
  registers: Register[]=[];
  addRegister(register:Register){
     this.registers = [...this.registers,register]
  }
}


