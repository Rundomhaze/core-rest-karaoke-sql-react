const routerApiEntry = require('express').Router();

const {Entry} = require('../../db/models');


routerApiEntry
  .delete('/:id', async (req, res) => {
    try {
      await Entry.destroy({
        where: {id: req.params.id}
      })
      res.json({status: 'ok'});
    } catch {
      res.json({
        status: 'DB not answer'
      })
    };
  })

module.exports = routerApiEntry;
