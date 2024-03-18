import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthService } from 'src/auth/auth.service';
import { Router } from '@angular/router';
import { ExerciceService } from 'src/services/exercice.service';
import { Exercise } from 'src/app/Models/Exercice';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ListKeyManager } from '@angular/cdk/a11y';
import { Component, OnInit, inject } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { UpdateexerciceComponent } from '../updateexercice/updateexercice.component';
@Component({
  standalone: true,
  selector: 'mg-listexercices',
  templateUrl: './listexercices.component.html',
  styleUrls: ['./listexercices.component.scss'],
  imports: [MatDialogModule, MatToolbarModule, MatButtonModule, MatIconModule, MatTableModule, CommonModule]
})
export class ListexercicesComponent implements OnInit {

  dataSource = new MatTableDataSource<Exercise>();
  private readonly exerciceService = inject(ExerciceService);
  constructor(public dialog: MatDialog) { }

  displayedColumns: string[] = [
    'date',
    'name',
    'duration',
    'calories',
    'state',
    'actions'
  ];

  async ngOnInit() {
    this.exerciceService.getAllExercices().subscribe((data) => {
      this.dataSource.data = data as Exercise[];
      console.log(this.dataSource.data);
    });
  }


  deleteExercice(exercice: Exercise) {
    console.log(exercice);
    this.exerciceService.deleteExercice(exercice);
  }

  editExercice(exercice: Exercise) {
    const dialogRef = this.dialog.open(UpdateexerciceComponent, {
      width: '480px',
      data: exercice
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

