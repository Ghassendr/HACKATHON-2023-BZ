import http from "./api";
import TokenService from "./token.service";

class AuthService {
  login({ username, password }) {
    return http.post("/auth/signin", {
        username,
        password
      })
      .then((response) => {
        if (response.data.accessToken) {
          TokenService.setUser(response.data);
        }
        return response.data;
      });
  }

  logout() {
    TokenService.removeUser();
  }
  

  register({ username, email, password }) {
    return http.post("/auth/signup", {
      username,
      email,
      password
    });
  }
}

export default new AuthService();
