import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private db: AngularFirestore) {}
  ngOnInit(): void {
    // this.saveData();
    // console.log('nie rób sobie jaj');
  }
  // saveData() {
  //   firebase.default
  //     .database()
  //     .ref('test/' + 1)
  //     .set({
  //       username: 'test',
  //     });
  // }
  log(x) {
    console.log(x);
  }
}
