const Twitter = require("twitter");
const dotenv = require("dotenv");

dotenv.config();

module.exports = class Client {
  constructor() {
    this.client = new Twitter({
      consumer_key: process.env.TWITTER_CONSUMER_KEY,
      consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
      access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
      access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
    });
  }

  post(status) {
    this.client.post(
      "statuses/update",
      { status: status },
      function (error, tweet, response) {
        if (error) throw error;
        console.log(tweet); // Tweet body.
      }
    );
  }
};
