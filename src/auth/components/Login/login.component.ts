import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AuthService } from 'src/auth/auth.service';

@Component({
  selector: 'mg-login',
  standalone: true,

  imports: [MatFormFieldModule, MatInputModule,ReactiveFormsModule,RouterLink,MatInputModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  private readonly authService = inject(AuthService);
  private readonly router=inject(Router);

  constructor(private fb:FormBuilder) { }

  public loginForm!:FormGroup;

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(6)]),
    });
  }

  async login() {
    await this.authService.login(this.loginForm.value.email, this.loginForm.value.password);
    this.router.navigateByUrl('/exercice');
  }

}
