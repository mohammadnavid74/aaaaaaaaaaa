import { LoginResponse } from "@/types/responses/auth/login-response";

const TOKEN_KEY = "access_token";
const USER_KEY = "user_info";

const tokenService = {
    saveLoginInfo: (data: LoginResponse) => {
        localStorage.setItem(TOKEN_KEY, data.token);
        localStorage.setItem(USER_KEY, JSON.stringify(data));
    },

    logout: () => {
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(USER_KEY);
    },

    getToken: (): string | null => localStorage.getItem(TOKEN_KEY),

    getUserInfo: (): LoginResponse | null => {
        const userJson = localStorage.getItem(USER_KEY);
        return userJson ? JSON.parse(userJson) : null;
    },

    isLoggedIn: (): boolean => !!localStorage.getItem(TOKEN_KEY),

    hasRole: (role: string): boolean => {
        const user = tokenService.getUserInfo();
        return user?.roles.includes(role) || false;
    },

    hasAnyRole: (roles: string[]): boolean => {
        const user = tokenService.getUserInfo();
        return roles.some(role => user?.roles.includes(role));
    },
};

export default tokenService;
