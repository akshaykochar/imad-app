var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one': {
        title: 'Article One by Akshay Kochar',
        heading: 'Article One',
        date: 'August 6 2017',
        content: `
                <p>
                    This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.
                </p>
                <p>
                    This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.
                </p>
                <p>
                    This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.This is my First Blog.
                </p>
        `
    },
    'article-two': {
        title: 'Article Two by Akshay Kochar',
        heading: ' Article Two',
        date: 'August 6 2017',
        content: `
                <p>
                This is my Second Blog.
                </p>
        `
    },
    'article-three': {
        title: 'Article Three by Akshay Kochar',
        heading: ' Article Three',
        date: 'August 6 2017',
        content: `
                <p>
                This is my Third Blog.
                </p>
        `
    }
};

function create_article(data){
    var title = data.title ;
    var date = data.date ;
    var heading = data.heading ;
    var content = data.content;
    var html_template = `
    <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name='viewport' content='width=device-width initial-scale=1'/>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                   ${content}
                </div>
            </div>
        </body>
    </html>
    `;
    return html_template;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/:articleName', function (req, res) {
  var articleName = req.params.articleName;
  res.send(create_article(articles[articleName]));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
