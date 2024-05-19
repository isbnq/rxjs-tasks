
export class UsersService<UserData> {
  private users: Map<number, UserData> = new Map();
  private lastUserId: number = 0;
  private freeIds: number[] = [];

  addUser(userData: UserData): number {
    const newId = this.freeIds.pop() ?? ++this.lastUserId;  // unique id
    
    this.users.set(newId, userData);

    return newId;
  }

  delUser(id: number) {
    if (this.users.delete(id)) {  // delete user
      this.freeIds.push(id);  // and add id to free ids if user was deleted
    }
  }

  getUserData(id: number) {
    return this.users.get(id);
  } 

  protected get usersEntries() {
    return this.users.entries();
  }
}
