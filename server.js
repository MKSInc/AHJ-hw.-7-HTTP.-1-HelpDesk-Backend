const Koa = require('koa');
const app = new Koa();

const PORT = process.env.PORT || 3000;

const startMsg = `Koa server has been started on port ${PORT} ...`;

app.use(async (ctx, next) => {
   ctx.body = startMsg;
});

app.listen(PORT, () => console.log(startMsg));
