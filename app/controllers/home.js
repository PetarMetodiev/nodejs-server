var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  Article.find(function (err, articles) {
    if (err) return next(err);
    res.render('index', {
      title: 'Generator-Express MVC',
      articles: articles
    });
  });
});

router.get('/test', function(req, res, next){
	res.send('Test hello!');
} );

router.get('/zdrasti', function(req, res, next){
	res.send('Zdravei mamche! Az sam Pi i ti pokazvam kakvo moga da pravq!');
} );

router.get('/show-off', function(req, res, next){
	res.render('miro');
} );
