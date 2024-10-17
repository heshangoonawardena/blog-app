export const LoginStart = (userCredentials) => ({
  type: "LOGIN_START",
});

export const loginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const loginFailure = () => ({
  type: "LOGIN_FAILURE",
});

export const LOGOUT = () => ({
  type: "LOGOUT",
});

export const userUpdate = () => ({
  type: "USER_UPDATE",
});

export const deleteUser = () => ({
  type: "USER_DELETE",
})
