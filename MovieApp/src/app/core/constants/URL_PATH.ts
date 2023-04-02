import { environment } from 'src/environments/environment';

export class movieAppUrlPath {
  public static readonly SIGN_UP =
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' +
    environment.API_KEY;
  public static readonly SIGN_IN =
    'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
    environment.API_KEY;
}
