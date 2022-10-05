# Google Sheets API Sample

These files are samples of using Google Sheets API to read data from a spreadsheet and write data to a spreadsheet.

## Google credentials

You can generate your own `google_application_credentials.json` from [Google Cloud Console API Library](https://console.cloud.google.com/apis/library), following [this tutorial](https://developers.google.com/sheets/api/quickstart/nodejs), and put in the root project folder. You can also configure the path in the `config.json` file.

## Indeed important

It is highly recomended read [the Google Sheets API docs](https://developers.google.com/sheets/api) to a fully understanding of the magic.

## Node version

For a better experience, it is recomended the use of Node.js version ^18.

## Project startup

This project was built with Yarn in mind, but you can use NPM if you prefer. The furst thing you have to do is run `yarn` or `npm install` to install the required packages. Onde it is installed, you can use the scrips bellow.

## Scripts

Just run `yarn <script>` or `npm run <script>` on your terminal with one of the following scripts:

- `read-data`: reads the specified spreadsheet and return the values according to the parsms
- `write-data`: appends the specified data to the spreadsheet content