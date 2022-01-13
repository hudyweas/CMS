import { Injectable } from '@angular/core';
import * as db from 'firebase';

@Injectable({
  providedIn: 'root',
})
export class DatabaseConnectorService {
  constructor() {}

  addDataToDatabase(path, model) {
    db.default
      .database()
      .ref(path + 1)
      .set(model);
  }
}
