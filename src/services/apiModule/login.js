import { postApi, getApi } from "../apiMethods";

export const LOGIN_APIs = {
  login: (body) => postApi("/login", body),
};
