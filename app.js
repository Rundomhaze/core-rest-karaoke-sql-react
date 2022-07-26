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
// const entriesRouter = require('./routes/entries');

// Импорт маршрутов из views
const allEntriesRouter = require('./routes/views/allEntry.route');
const editFormRouter = require('./routes/views/editForm.route');
const newEntryRoute = require('./routes/views/newEntry.route');
const oneEntryRouter = require('./routes/views/oneEntry.route');

// Импорт маршрутов из api
const deleteApiRouter = require('./routes/api/delete.api.route');
const editApiRouter = require('./routes/api/edit.api.route');
const newEntryApiRouter = require('./routes/api/newEntry.api.route');

// Подключаем логгирование запросов
app.use(morgan('dev'));

// Подключаем статику
app.use(express.static(path.join(__dirname, 'public')));

// Подключаем импортированные маршруты с определенным url префиксом.
app.use('/', indexRouter);
// app.use('/', entriesRouter);

// Подключаем импортированные маршруты из views
app.use('/', allEntriesRouter);
app.use('/', editFormRouter);
app.use('/', newEntryRoute);
app.use('/', oneEntryRouter);

// Подключаем импортированные маршруты из api
app.use('/api', deleteApiRouter);
app.use('/api', editApiRouter);
app.use('/api', newEntryApiRouter);


app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});
