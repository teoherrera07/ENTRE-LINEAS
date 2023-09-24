const express = require('express');
const app = express();
const path = require('path');
const indexRouter = require('./routes/index-router');
const productRouter = require('./routes/product-router');
const userRouter = require('./routes/user-router');
const apiProductRouter = require('./routes/apisRoutes/api-product-router');
const apiUserRouter = require('./routes/apisRoutes/api-user-router');
const apiCategoryRouter = require('./routes/apisRoutes/api-category-router');
const apiTopicRouter = require('./routes/apisRoutes/api-topic-router');
const apiCounterRouter = require('./routes/apisRoutes/api-counter-router');
const methodOverride = require('method-override');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const cors = require('cors');


app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, './public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//app.use(session({ secret: "Nuestro mensaje secreto"}));
app.use(session({
  secret: "Nuestro mensaje secreto",
  resave: false,
  saveUninitialized: false
}));
app.use(cookieParser());
app.use(cors());

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/products', productRouter);
app.use('/api/products', apiProductRouter);
app.use('/api/users', apiUserRouter);
app.use('/api/categories', apiCategoryRouter);
app.use('/api/topics', apiTopicRouter);
app.use('/api/counter', apiCounterRouter);


app.listen(3001, ()=> {
  console.log('Servidor funcionando en puerto 3001')
})


