import { Injectable } from "@angular/core";
import { User } from "../models/user";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private users = [
    {
      id: 1,
      firstName: "e",
      lastName: "health",
    },
    {
      id: 2,
      firstName: "e",
      lastName: "Finance",
    },
    {
      id: 2,
      firstName: "e",
      lastName: "Aswaaq",
    },
  ];

  constructor() { }

  getAllUsers(): User[] {
    return this.users;
  }

  addUser(user: User) {
    user.id = this.users.length + 1;
    this.users.push(user);
  }

  updateUser(user: User) {
    const index = this.users.findIndex((u) => user.id === u.id);
    this.users[index] = user;
  }

  deleteUser(user: User) {
    this.users.splice(this.users.indexOf(user), 1);
  }
}
