import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root',
})
export class DatabaseConnectorService {
  constructor(private db: AngularFireDatabase) {}

  private users: AngularFireList<any>;

  saveUser(user) {
    this.db.object('/users/' + user.uid).update({
      email: user.email,
      uid: user.uid,
    });
  }

  getUsers() {
    this.users = this.db.list('users');
    return this.users.valueChanges();
  }
}
