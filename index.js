import 'babel-polyfill';
import koa from 'koa';

const app = koa();

app.use(function *(){
  this.body = "hello world";
})

app.listen(8000);