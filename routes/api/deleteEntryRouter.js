const deleteEntryRout = require('express').Router();

const {Entry} = require('../../db/models');

deleteEntryRout
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

module.exports = deleteEntryRout;
