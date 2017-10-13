const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

app
	.use(require('koa-body')())
	.use(router.allowedMethods())
	.use(router.routes());

app.listen(3000);

let testDb = [
	{
		id: 0,
		name: "test",
	}
]

// get
router.get('/test/:id', context => {
	context.body = testDb[context.params.id];
});

/// post
router.post('/test/:id', context => {
	context.body = Object.assign(testDb[context.params.id], context.request.body);
})
