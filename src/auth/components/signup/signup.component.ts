import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from 'src/auth/auth.service';

@Component({
  selector: 'mg-signup',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, RouterLink, MatInputModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  private readonly authService = inject(AuthService);

  constructor(private fb: FormBuilder) { }
  private readonly router = inject(Router);
  public signupForm!: FormGroup;

  ngOnInit(): void {

    this.signupForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  signup() {
    this.authService.signup(this.signupForm.value.email, this.signupForm.value.password);
    this.router.navigateByUrl('/exercice');
  }

}
