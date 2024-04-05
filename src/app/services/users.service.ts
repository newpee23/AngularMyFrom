import { Injectable } from '@angular/core';

export interface User {
  fullName: {
    firstName: string;
    lastName: string;
  };
  loginDetail: {
    username: string;
    password: string;
  };
  address: {
    city: string;
    state: string;
    zipcode: string;
  }
}

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  public users: User[] = [];

  constructor() { }

  setUser(user: User) {
    console.log(user);
    this.users.push(user);
    console.log(this.users)
  }

  getUsers(): User[] {
    return this.users;
  }

  deleteUserByUsername(username: string) {
    const index = this.users.findIndex(user => user.loginDetail.username === username);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }

  clearUsers() {
    this.users = [];
  }
}
