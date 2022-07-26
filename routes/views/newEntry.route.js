const express = require('express');
const NewEntry = require('../../views/entries/NewEntry');
const ReactDOMServer = require('react-dom/server');
const React = require('react');

const newEntryRoute = express.Router();


newEntryRoute.get('/new-entry-form', async (req, res) => {
  const newEntry = React.createElement(NewEntry, {});
  const html = ReactDOMServer.renderToStaticMarkup(newEntry);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

module.exports = newEntryRoute

