var express = require('express'),
    morgan = require('morgan');

var app = express();

var port = process.env.PORT || 3002;

app.use(express.static('public'));
app.use(morgan('dev'));
// app.set('view engine', 'html');



app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(port, () => {
  console.log('Web server started on port', app.get('port'));
});

