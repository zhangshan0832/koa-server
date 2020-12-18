/*
 * @Author: your name
 * @Date: 2020-12-18 15:49:54
 * @LastEditTime: 2020-12-18 16:21:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \koa\routers\blog.js
 */
const router = require("koa-router")();
router.get("/", async (ctx) => {
  //   ctx.body = "我是文章接口";
  ctx.body = `我是文章接口id: ${ctx.query.id}`;
});
router.get("/:id", async (ctx) => {
  //   ctx.body = "我是文章接口";
  ctx.body = `动态路由文章接口id: ${ctx.params.id}`;
});
router.post("/", async (ctx) => {
  ctx.body = ctx.request.body;
});

router.put("/:id", async (ctx) => {
  ctx.body = `PUT: ${ctx.params.id}`;
});

router.del("/:id", async (ctx) => {
  ctx.body = `DEL: ${ctx.params.id}`;
});

module.exports = router;
