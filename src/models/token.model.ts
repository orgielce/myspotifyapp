export interface Token {
  loadDataFrom: string;
  access_token: string;
  token_type: string;
  expires_in: number;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: boolean;
}
