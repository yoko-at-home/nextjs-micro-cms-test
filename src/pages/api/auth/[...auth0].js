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
  url: "https://dev-nvo1a7nx.us.auth0.com/oauth/token",
  headers: { "content-type": "application/json" },
  body: '{"client_id":"Vkh5dr1bV7E6Yg55X2JibGUFiZOHw71T","client_secret":"QL4jYm3Zfb0tC8t8yBdffK9BNGh1fBkAEIWZ9i7DrZwfo3F4RXL_bU9t92e-I7YC","audience":"https://microcms-test-six.vercel.app","grant_type":"client_credentials"}',
};

request(options, (error, _response, body) => {
  if (error) throw new Error(error);

  console.log(body);
});

const axios = require("axios");

const options2 = {
  method: "GET",
  url: "http://localhost:3000/",
  headers: { authorization: "Bearer TOKEN" },
};

axios(options2)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
