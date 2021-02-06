const { GoogleSpreadsheet } = require("google-spreadsheet");
const dotenv = require("dotenv");

dotenv.config();

module.exports = class Sheet {
  constructor() {
    this.doc = new GoogleSpreadsheet(
      "1SIlY2F6rdndQImeFGoYD14pBMy2JZy3iLYxjjceC6T4"
    );
  }

  async load() {
    await this.doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY,
    });
    await this.doc.loadInfo();
  }

  async add(rows) {
    const sheet = this.doc.sheetsByIndex[0];
    await sheet.addRows(rows);
  }

  async getRows() {
    const sheet = this.doc.sheetsByIndex[0];
    const rows = await sheet.getRows();

    return rows;
  }
};
