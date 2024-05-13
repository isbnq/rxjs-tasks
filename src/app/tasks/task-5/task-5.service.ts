import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Task5Service {
  #users: Map<number, {}> = new Map();
  #lastUserId: number = 0;

  #freeIds: number[] = []

  constructor() { }

  addUser(): number {
    const newId = this.#freeIds.pop() ?? ++this.#lastUserId;
    this.#users.set(newId, {});
    return newId;
  }

  delUser(id: number) {
    this.#users.delete(id);
  }

  setUserActive(id: number) {

  }

  getUsersActivity() {
    
  }
}
