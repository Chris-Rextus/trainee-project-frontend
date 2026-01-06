// src/services/authService.ts

export interface LoginPayload {
    email: string;
    password: string;
}

export interface AuthResponse {
    token: string;
    user: {
        email: string;
    };
}

const fakeUsers: LoginPayload[] = [
    { email: "admin@test.com", password: "123456" },
]

// Login fake
export const login = ( payload: LoginPayload ): Promise<AuthResponse> => {

    return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = fakeUsers.find(
        (u) =>
          u.email === payload.email &&
          u.password === payload.password
      );

      if (!user) {
        reject("Invalid credentials");
      } else {
        resolve({
          token: "fake-jwt-token",
          user: { email: user.email },
        });
      }
    }, 1000);
  });
};

// Register fake
export const register = ( payload: LoginPayload ): Promise<void> => {
  
    return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exists = fakeUsers.some(
        (u) => u.email === payload.email
      );

      if (exists) {
        reject("User already exists");
      } else {
        fakeUsers.push(payload);
        resolve();
      }
    }, 1000);
  });
};