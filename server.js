const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');

const app = express();
const user = [ 
    '/user/settings',
    '/user/panel',
];

app.engine('.hbs', hbs());
app.engine('hbs', hbs({ extname: 'hbs', layoutsDir: './layouts', defaultLayout: 'main' }));
app.set('view engine', '.hbs');

app.use(express.static(path.join(__dirname, '/public')));

app.use(user ,(req, res, next) => {
    if(1 + 1 == 3) next();
    else res.send('Please, log in');
})

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/hello/:name', (req, res) => {
  res.render('hello', { name: req.params.name });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/info', (req, res) => {
  res.render('info');
});

app.get('/history', (req, res) => {
  res.render('history');
});

app.use((req, res) => {
    if(res.status(404)){
        res.render('404');
    }
});

app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});