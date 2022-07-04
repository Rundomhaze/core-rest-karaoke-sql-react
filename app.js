require('@babel/register');

// Фреймворк веб-приложений.
const express = require('express');

const app = express();
// HTTP request logger middleware for node.js.
// Логгирование деталей запросов.
const morgan = require('morgan');
const path = require('path');

const PORT = 3000;

// Тут должно быть подключение к БД (загляни в './db/connect')

// Обработка POST запросов.
// urlencoded.
app.use(express.urlencoded({ extended: true }));
// json.
app.use(express.json());

// Импорт маршрутов.
const indexRouter = require('./routes/index');
const entriesRouter = require('./routes/entries');
const deleteEntryRout = require('./routes/api/deleteEntryRouter')
const detailsEntryRout = require('./routes/api/detailsEntryRouter')


// Подключаем логгирование запросов
app.use(morgan('dev'));

// Подключаем статику
app.use(express.static(path.join(__dirname, 'public')));

// Подключаем импортированные маршруты с определенным url префиксом.
app.use('/', indexRouter);
app.use('/', entriesRouter);
app.use('/api/entry', deleteEntryRout);
app.use('/api/onentry', detailsEntryRout)

app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});
