export type LoginResponse = {
    id: string;
    token: string;
    firstName: string;
    lastName: string;
    userName: string | null;
    scopes: string[];
    roles: string[];
  };