const Client = require("./twitter");
const Sheet = require("./sheet");

(async () => {
  const sheet = new Sheet();
  await sheet.load();

  const quotes = await sheet.getRows();
  const status = quotes[0].quote;

  const client = new Client();
  client.post(status);

  await quotes[0].delete();
})();
