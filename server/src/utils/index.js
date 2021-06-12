const Twit = require("twit");

const T = new Twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});

const fetchTwitterApiResponse = async (queryParams) => {
  try {
    return await T.get("search/tweets", {
      q: "UNICEF since:2021-06-01",
      count: 10,
    });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  fetchTwitterApiResponse,
};
