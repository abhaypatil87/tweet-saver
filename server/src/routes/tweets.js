const KoaRouter = require("koa-router");
const tweetsController = require("../controllers/tweetsController");
const router = new KoaRouter();

const baseUrl = "/api";

router.get(`${baseUrl}/tweets`, tweetsController.index);

module.exports = router;