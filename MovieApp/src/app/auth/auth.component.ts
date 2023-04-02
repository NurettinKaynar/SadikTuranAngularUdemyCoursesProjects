import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../core/auth/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnInit {
  isLoginMode: boolean = true;
  authForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.onInitAuthForm();
  }

  onInitAuthForm() {
    this.authForm = this.formBuilder.group({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      returnSecureToken: new FormControl(true, Validators.required),
    });
  }

  onToggleModeHandler() {
    this.isLoginMode = !this.isLoginMode;
  }
  onSubmitAuthForm() {
    if (this.authForm.valid) {
    }
    console.log(this.authForm.value);
  }
}
