const service = require('./utils/google-sheets');
const config = require('./config.json')

service.spreadsheets.values.get({
  spreadsheetId: config.spreadsheetId,
  range: 'api-test!A1:B2'
}).then((res) => console.log(res.data.values));