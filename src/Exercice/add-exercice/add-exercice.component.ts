import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { inject } from '@angular/core';
import { Form, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { ExerciceService } from 'src/services/exercice.service';

@Component({
  selector: 'mg-add-exercice',
  templateUrl: './add-exercice.component.html',
  styleUrls: ['./add-exercice.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, RouterLink, MatInputModule, CommonModule]
})
export class AddExerciceComponent implements OnInit {



  constructor(private fb: FormBuilder) { }

  private readonly exerciceService = inject(ExerciceService);
  public exerciceForm!: FormGroup;
  @Output() close=new EventEmitter<void>();

  ngOnInit(): void {

    this.exerciceForm = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      calories: new FormControl(0, [Validators.required, Validators.min(1)]),
      duration: new FormControl(0, [Validators.required, Validators.min(1)]),
      state: new FormControl('', [Validators.required, Validators.minLength(3)]),
      date:new FormControl(Date.now(),[Validators.required])

    });
  }


  async addExercice() {
    await this.exerciceService.addExercice(this.exerciceForm.value.name, this.exerciceForm.value.calories, this.exerciceForm.value.duration, this.exerciceForm.value.state, this.exerciceForm.value.date);
    this.close.emit();
  }

  

}
