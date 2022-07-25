var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const port = 8080

//setting middleware

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + 'public')); //Serves resources from public folder

const randomTexts = [
  "Joey doesn't share food!",
  "If he doesn't like you, this is all a moo-point.",
  "I'm Chandler. I make jokes when I'm uncomfortable.",
  "We were on a break!",
  "That is brand new information!",
  "OH MY GOD.",
  "Could I BE wearing anymore clothes?",
  "How you doin'?",
]

function getRandomInt() {
  return Math.floor(Math.random() * 7);
}

app.get('/', (req, res) => {
    res.sendFile('./public/index.html', { root: __dirname });
});
app.get('/calculation', (req, res) => {
    res.sendFile('./public/calculation.html', { root: __dirname });
});
app.get('/random-text', (req, res) => {
    res.sendFile('./public/random-text.html', { root: __dirname });
});

app.post('/add', (req, res, next) => {
    res.json({result: Number(req.body.num1) + Number(req.body.num2)});
});
app.post('/mul', (req, res, next) => {
    res.json({result: Number(req.body.num1) * Number(req.body.num2)});
});
app.post('/sub', (req, res, next) => {
    res.json({result: Number(req.body.num1) - Number(req.body.num2)});
});
app.get('/getRandomText', (req, res, next) => {
    res.json({result: randomTexts[getRandomInt()]});
});

app.listen(port, () => {
  console.log(`Sample app listening on port ${port}`)
})

