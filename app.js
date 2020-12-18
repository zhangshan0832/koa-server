/*
 * @Author: your name
 * @Date: 2020-12-18 15:23:36
 * @LastEditTime: 2020-12-18 16:58:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \koa\aoo.js
 */
const Koa = require("koa");
const app = new Koa();
const path = require("path");
const onerror = require("koa-onerror");
const koaBody = require("koa-body");
const json = require("koa-json");
const logger = require("koa-logger");
const routers = require("./routers/index");

const responseFormatter = require("./middleware/response-formatter");
const { apiPrefix } = require("./config/index");

// koa的错误处理程序hack
onerror(app);

// middleware
app.use(
  koaBody({
    multipart: true, // 支持文件上传
    formidable: {
      formidable: {
        uploadDir: path.join(__dirname, "public/upload"), // 设置文件上传目录
        keepExtensions: true, // 保持文件的后缀
        maxFieldsSize: 2 * 1024 * 1024,
        onFileBegin: (name, file) => {
          console.log(`name ${name}`);
          console.log(file);
        },
      },
    },
  })
);
app.use(json());
app.use(logger());
// response formatter
app.use(responseFormatter(apiPrefix));
// router
app.use(routers.routes()).use(routers.allowedMethods());

// 监听 error
app.on("error", (err, ctx) => {
  console.log("server error", err, ctx);
});
app.listen(3000);
