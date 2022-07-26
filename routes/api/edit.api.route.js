const express = require('express');
const { Entry } = require('../../db/models');

const editApiRouter = express.Router();

editApiRouter.post('/update-entry/:id', async (req, res) => {
  const { id } = req.params
  const entry = await Entry.findOne({ where: { id } });
  const { singer, songTitle } = req.body;
  entry.singer = singer;
  entry.songTitle = songTitle;
  entry.save();
  res.json({
    edit: true,
    id,
    singer,
    songTitle
  })
});

module.exports = editApiRouter;
