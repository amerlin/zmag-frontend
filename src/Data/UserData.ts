export interface UserData {
  firstName: string;
  lastName: string;
  isAutenticated: boolean;
  currentToken: string;
  roles: string[];
  lastLogin: Date;
}
