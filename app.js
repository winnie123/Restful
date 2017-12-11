var restify = require('restify');
var routes = require('./filters/routers');

var server = restify.createServer({
    name: 'myapp',
    version: '1.0.0'
});

// server.use(restify.plugins.acceptParser(server.acceptable));
// server.use(restify.plugins.queryParser());
// server.use(restify.plugins.bodyParser());

// server.get('/echo/:name', function(req, res, next) {
//     res.send(req.params);
//     return next();
// });

routes.Routers.inject(server);

server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
});