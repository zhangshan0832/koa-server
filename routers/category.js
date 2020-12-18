/*
 * @Author: your name
 * @Date: 2020-12-18 15:48:22
 * @LastEditTime: 2020-12-18 15:49:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \koa\routers\category.js
 */
const router = require("koa-router")();
router.get("/", async (ctx) => {
  ctx.body = "我是分类接口";
});
module.exports = router;
