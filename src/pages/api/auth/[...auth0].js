/* eslint-disable no-console */
/* eslint-disable import/no-default-export */
import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";

export default handleAuth({
  async login(req, res) {
    await handleLogin(req, res, {
      returnTo: "/members",
    });
  },
});

var request = require("request");

var options = {
  method: "POST",
  url: process.env.AUTH0_TOKEN_URL,
  headers: { "content-type": "application/json" },
  body: `{"client_id":"${process.env.AUTH0_TOKEN_CLEINT_ID}","client_secret":"${process.env.AUTH0_TOKEN_SECRET}","audience":"${process.env.AUTH0_TOKEN_AUDIENCE}","grant_type":"client_credentials"}`,
};

request(options, (error, _response, body) => {
  if (error) throw new Error(error);

  console.log(body);
});

const axios = require("axios");

const options2 = {
  method: "GET",
  url: "http://localhost:3000/",
  headers: { authorization: `"Bearer ${process.env.AUTH0_TOKEN}"` },
};

axios(options2)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
