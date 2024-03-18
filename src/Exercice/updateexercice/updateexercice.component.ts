import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthService } from 'src/auth/auth.service';
import { Router, RouterLink } from '@angular/router';
import { ExerciceService } from 'src/services/exercice.service';
import { Exercise } from 'src/app/Models/Exercice';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ListKeyManager } from '@angular/cdk/a11y';
import { Component, Inject, OnInit, inject } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
@Component({
  selector: 'mg-updateexercice',
  templateUrl: './updateexercice.component.html',
  styleUrls: ['./updateexercice.component.scss'],
  standalone: true,
  imports: [MatDialogModule,MatFormFieldModule, MatInputModule, ReactiveFormsModule, RouterLink, MatInputModule, CommonModule]
})
export class UpdateexerciceComponent {

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<UpdateexerciceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Exercise) { }

  private readonly exerciceService = inject(ExerciceService);
  public exerciceForm!: FormGroup;

  ngOnInit(): void {

    this.exerciceForm = this.fb.group({
      name: new FormControl(this.data.name, [Validators.required, Validators.minLength(3)]),
      calories: new FormControl(this.data.calories, [Validators.required, Validators.min(1)]),
      duration: new FormControl(this.data.duration, [Validators.required, Validators.min(1)]),
      state: new FormControl(this.data.state, [Validators.required, Validators.minLength(3)]),
      date: new FormControl(this.data.date, [Validators.required])

    });
  }

  async updateExercice() {
    await this.exerciceService.updateExercice({id:this.data.id,name: this.exerciceForm.value.name, calories:this.exerciceForm.value.calories,duration: this.exerciceForm.value.duration,state: this.exerciceForm.value.state,date: this.exerciceForm.value.date});
    this.dialogRef.close();
  }
}
