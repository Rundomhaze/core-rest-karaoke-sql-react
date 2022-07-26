const express = require('express');
const EditEntry = require('../../views/entries/EditEntry');
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const { Entry } = require('../../db/models');

const editFormRouter = express.Router();

editFormRouter.get('/edit-one-entry-form/:id', async (req, res) => {
  const entry = await Entry.findOne({ where: { id: req.params.id } });
  const editEntry = React.createElement(EditEntry, { entry });
  const html = ReactDOMServer.renderToStaticMarkup(editEntry);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

module.exports = editFormRouter;
