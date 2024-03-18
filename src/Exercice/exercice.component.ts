import { Component, OnInit, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthService } from 'src/auth/auth.service';
import { Router } from '@angular/router';
import { ExerciceService } from 'src/services/exercice.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { AddExerciceComponent } from 'src/Exercice/add-exercice/add-exercice.component';
import { ListexercicesComponent } from 'src/Exercice/listexercices/listexercices.component';



@Component({
    selector: 'mg-exercice',
    templateUrl: './exercice.component.html',
    styleUrls: ['./exercice.component.scss'],
    standalone: true,
    imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatTableModule, CommonModule, AddExerciceComponent, ListexercicesComponent]
})
export class ExerciceComponent implements OnInit {

  ngOnInit(): void {
    
  }
  displayed = false;
  private readonly router = inject(Router);
  private readonly exerciceService = inject(ExerciceService);


  toggle() {
    this.displayed = !this.displayed;
  }

  

}
