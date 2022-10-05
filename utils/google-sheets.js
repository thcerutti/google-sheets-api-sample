const { GoogleAuth } = require("google-auth-library");
const { google } = require("googleapis");
const config = require("../config.json");

process.env["GOOGLE_APPLICATION_CREDENTIALS"] =
  config.googleApplicationCredentialsPath;

const service = google.sheets({
  version: config.apiVersion,
  auth: new GoogleAuth({
    scopes: config.scopes,
  }),
});

module.exports = service;
