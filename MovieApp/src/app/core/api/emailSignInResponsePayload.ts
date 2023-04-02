export interface EmailSignInResponsePayload {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  displayName: string;
  registered: boolean;
}
