require("dotenv").config();
const koa = require("koa");
const {
  userAgent
} = require("koa-useragent");
const cors = require("kcors");
const tweetsRouter = require("./src/routes/tweets");

const port = process.env.APP_PORT || 4101;

const app = new koa();
app.use(async function responseTime(ctx, next) {
  const t1 = Date.now();
  await next();
  const t2 = Date.now();
  ctx.set("X-Response-Time", `${Math.ceil(t2 - t1)}ms`);
});

// For cors with options
app.use(
  cors({
    origin: "*",
  })
);

// For useragent detection
app.use(userAgent);

// For managing body. We're only allowing json.
app.use(require("koa-bodyparser")());

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    err.status = err.statusCode || err.status || 500;
    ctx.body = err.message;
    ctx.app.emit("error", err, ctx);
  }
});

app.use(tweetsRouter.routes());
app.use(tweetsRouter.allowedMethods());

app.listen(port, async () => {
  await console.log(`Save-On-Tweets Server listening on port ${port}`);
});