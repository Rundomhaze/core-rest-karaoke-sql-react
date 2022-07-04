const routerApiEntry = require('express').Router();
// const React = require('react');
// const ReactDOMServer = require('react-dom/server');
const {
  Entry
} = require('../../db/models');


/*
  GET /entries
  POST /entries
  DELETE /entries/:id
  PUT /entries/:id
*/

// module.exports = router
//   .get()

routerApiEntry.delete('/:id', async (req, res) => {
  //  console.log(req.params)
  //  res.send('pricol')
  // const { id } = req.params;
  try {
    await Entry.destroy({
      where: {
        id: req.params.id
      }
    })
    res.json({
      status: 'ok'
    });
  } catch {
    res.json({
      status: 'DB not answer'
    })
  }


})

module.exports = routerApiEntry;
