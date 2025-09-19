import { createAction, createReducer } from "@reduxjs/toolkit";

interface UserData {
  username: string,
  role: "admin" | "user" | "guest",
};

const loginUser = createAction<{ username: string }>("LOGIN_USER");
const logoutUser = createAction("LOGOUT_USER");

const userReducer = createReducer({
  username: "",
  role: "guest",
} as UserData, function(builder) {
  builder
    .addCase(loginUser, function(userData: UserData, action) {
      userData.username = action.payload.username;
      userData.role = action.payload.username === "admin" ? "admin" : "user";
    })
    .addCase(logoutUser, function(userData: UserData) {
      userData.username = "guest";
      userData.role = "guest";
    });
});

export default userReducer;
export { loginUser, logoutUser };
