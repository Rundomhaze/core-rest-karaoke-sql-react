const express = require('express');
const ShowEntry = require('../../views/entries/ShowEntry');
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const { Entry } = require('../../db/models');

const oneEntryRouter = express.Router();

oneEntryRouter.get('/show-one-entry/:id', async (req, res) => {
  const entry = await Entry.findOne({ where: { id: req.params.id } });
  const showEntry = React.createElement(ShowEntry, { entry });
  const html = ReactDOMServer.renderToStaticMarkup(showEntry);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

module.exports = oneEntryRouter;
