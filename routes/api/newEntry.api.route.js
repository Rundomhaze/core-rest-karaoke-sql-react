const express = require('express');
const { Entry } = require('../../db/models');

const newEntryApiRouter = express.Router();

newEntryApiRouter.post('/create-new-post', async (req, res) => {
  const { singer, songTitle } = req.body;
  const newEntry = await Entry.create(req.body);
  newEntry.singer = singer;
  newEntry.songTitle = songTitle;
  await newEntry.save();
  res.json({
    add: true,
    singer,
    songTitle
  })
});


module.exports = newEntryApiRouter;
