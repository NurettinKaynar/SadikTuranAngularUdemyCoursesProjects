import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  EmailSignInAndSignUpRequestModel,
  emailSignUpResponsePayload,
} from '../api';
import { movieAppUrlPath } from '../constants/URL_PATH';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signUp(signUpObject: EmailSignInAndSignUpRequestModel) {
    return this.http.post<emailSignUpResponsePayload>(movieAppUrlPath.SIGN_UP, {
      email: signUpObject.email,
      password: signUpObject.password,
      returnSecureToken: signUpObject.returnSecureToken,
    });
  }
}
