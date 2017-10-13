const Koa = require('koa')
const request = require('koa-request')

const app = new Koa();

app.use(function *(){
	var options = { url: 'https://bittrex.com/api/v1.1/public/getmarkets', };
	var response = yield request(options);
	var info = JSON.parse(response.body);
	this.body = info.result;
})

app.listen(3000);
