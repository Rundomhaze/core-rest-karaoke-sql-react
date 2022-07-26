const express = require('express');
const Entries = require('../../views/entries/Entries');
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const { Entry } = require('../../db/models');

const allEntriesRouter = express.Router();

allEntriesRouter.get('/all-the-entries', async (req, res) => {
  const entries = await Entry.findAll({raw: true, order: [['id', 'DESC']]});

  const entriesView = React.createElement(Entries, { entries });
  const html = ReactDOMServer.renderToStaticMarkup(entriesView);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

module.exports = allEntriesRouter;
