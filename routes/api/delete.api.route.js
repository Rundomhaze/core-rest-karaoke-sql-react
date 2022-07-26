const express = require('express');
const { Entry } = require('../../db/models');

const deleteApiRouter = express.Router();

deleteApiRouter.delete('/delete-entry/:id', async (req, res) => {
  try {
    const {id} = req.params
    await Entry.destroy({where: { id }})
    res.json({ 
      deleted: true, id 
    }).status(204)

  } catch(err) { 
    res.json({
      message: err.message,
    }).status(500)
  }  
});

module.exports = deleteApiRouter;


