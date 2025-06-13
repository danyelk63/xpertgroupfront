import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpUserService } from '@services/index';
import { StorageService } from '@services/index';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth/auth.service';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  router = inject(Router);
  fb = inject(FormBuilder);
  _snackBar = inject(MatSnackBar);
  userService = inject(HttpUserService);
  storageService = inject(StorageService);
  authService = inject(AuthService);

  loginView = true;

  form = this.fb.group({
    name: this.fb.control(''),
    email: this.fb.control('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
    ]),
    password: this.fb.control('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  ngOnInit(): void {
    this.storageService.removeToken();
    this.storageService.remove('user');
    this.authService.setAuth();
  }

  toggleView() {
    this.loginView = !this.loginView;
  }

  onSubmit() {
    if (this.loginView) {
      this.userService
        .login(this.form.getRawValue() as Partial<User>)
        .subscribe({
          next: (response: { token: string; data: User }) => {
            this.storageService.setToken(response.token);
            this.storageService.set('user', response.data);
            this.authService.setAuth();
            this.router.navigate(['/cats']);
          },
          error: (error) => {
            console.error('Login failed', error);
            this._snackBar.open('Usuario o contraseña incorrectos', 'OK', {
              duration: 5000,
            });
          },
        });
    } else {
      this.userService
        .create(this.form.getRawValue() as Partial<User>)
        .subscribe({
          next: () => {
            this.loginView = true;
            this._snackBar.open('Usuario creado', 'OK', { duration: 5000 });
          },
          error: (error) => {
            console.error('Login failed', error);
          },
        });
    }
  }
}
