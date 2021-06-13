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
      q: queryParams.q || "",
      count: queryParams.count || 100,
    });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  fetchTwitterApiResponse,
};
