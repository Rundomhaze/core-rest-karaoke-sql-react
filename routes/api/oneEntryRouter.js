const oneEntryRout = require('express').Router();

const ReactDOMServer = require('react-dom/server');
const React = require('react');

const {Entry} = require('../../db/models');

const ShowEntry = require('../../views/entries/ShowEntry.jsx');

oneEntryRout
.get('/:id', async (req, res) => { 
  try {
    const entry = await Entry.findOne({ where: { id: req.params.id } });
    console.log(entry);
    const showEntry = React.createElement(ShowEntry, { entry });
    const html = ReactDOMServer.renderToStaticMarkup(showEntry);
    res.write('<!DOCTYPE html>');
    res.end(html);
  } catch (err) {
    console.error(err, 'Error from details info')
  };
});

module.exports = oneEntryRout;

