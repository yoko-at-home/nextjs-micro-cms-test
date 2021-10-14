/* eslint-disable import/no-default-export */
import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";

export default handleAuth({
  async login(req, res) {
    await handleLogin(req, res, {
      returnTo: "/members",
    });
  },
  async logout(req, res) {
    await handleLogin(req, res, {
      returnTo: "/members",
    });
  },
});
