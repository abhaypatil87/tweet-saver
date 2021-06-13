const { fetchTwitterApiResponse } = require("../utils");

const index = async (ctx) => {
  let tweets;
  try {
    tweets = await fetchTwitterApiResponse(ctx.query);
    ctx.body = {
      tweets,
    };
  } catch (error) {
    ctx.throw(400, error.message);
  }
};

module.exports = {
  index,
};
