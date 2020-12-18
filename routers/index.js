/*
 * @Author: your name
 * @Date: 2020-12-18 15:32:29
 * @LastEditTime: 2020-12-18 16:06:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \koa\routers\index.js
 */
const router = require("koa-router")();
const { apiPrefix } = require("../config/index");

const blog = require("./blog");
const category = require("./category");
router.prefix(apiPrefix);

router.use("/blogs", blog.routes(), blog.allowedMethods());
router.use("/categories", category.routes(), category.allowedMethods());

module.exports = router;
