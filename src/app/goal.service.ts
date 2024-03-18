import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  constructor(private db: AngularFirestore) { }


  getAllGoals() {
    return this.db.collection('Goal').valueChanges({ idField: 'id',nameField:'name',durationField:'duration',targetField:'target',deadlineField:'deadline',completedField:'completed'});
  }
}
