import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Exercise } from 'src/app/Models/Exercice';
@Injectable({
  providedIn: 'root'
})
export class ExerciceService {
  constructor(private db: AngularFirestore) { }

  getAllExercices() {
    return this.db.collection('Exercice').valueChanges({ idField: 'id',nameField:'name',durationField:'duration',caloriesField:'calories',dateField:'date',stateField:'state'});
  }

  addExercice( name: string, calories: number, duration: number, state: string, date: Date) {
    this.db.collection('Exercice').add({ name, calories, duration, state,date});
  }

  deleteExercice(exercice: Exercise) {
    this.db.collection('Exercice').doc(exercice.id).delete();
  }
  updateExercice(exercice: Exercise) {
    this.db.collection('Exercice').doc(exercice.id).update(exercice);
    
  }

  getWeekSummary(){
    return this.db.collection('Weeksummary').valueChanges({ idField: 'id',mondayField:'monday',tuesdayField:'tuesday',wednesdayField:'wednesday',thursdayField:'thursday',fridayField:'friday',saturdayField:'saturday',sundayField:'sunday'})
  }

}
