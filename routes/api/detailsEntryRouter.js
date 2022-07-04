const detailsEntryRout = require('express').Router();

const ReactDOMServer = require('react-dom/server');
const React = require('react');

const {Entry} = require('../../db/models');

const ShowEntry = require('../../views/entries/ShowEntry.jsx');

detailsEntryRout
.get('/:id', async (req, res) => { 
  try {
    const entry = await Entry.findOne({ where: { id: req.params.id } });   
    const showEntry = React.createElement(ShowEntry, { entry });
    const html = ReactDOMServer.renderToStaticMarkup(showEntry);
   
    res.send(html);
  } catch (err) {
    console.error(err, 'Error from details info')
  };
});

module.exports = detailsEntryRout;

