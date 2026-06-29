const TOKEN_KEY = 'exam_cracker_token';

const authService = {
  setToken(token: string) {
    localStorage.setItem(TOKEN_KEY, token);
  },

  getToken() {
    return localStorage.getItem(TOKEN_KEY);
  },

  isAuthenticated() {
    return Boolean(this.getToken());
  },

  clearToken() {
    localStorage.removeItem(TOKEN_KEY);
  },
};

export default authService;
