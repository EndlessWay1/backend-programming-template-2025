const express = require('express');

const gachaItemsController = require('./gacha-items-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/gacha-items', route);

  // Get list of all gacha available yang dapat dimenangi.
  route.get('/', gachaItemsController.getValidItems);

  // Get item spesifik
  route.get('/:id', gachaItemsController.getItem);

  // get semua item gacha (query periode=)
  route.get('/all', gachaItemsController.getItems);

  // Create a new gacha
  route.post('/', gachaItemsController.createItems);

  // Delete an items
  route.delete('/:id', gachaItemsController.deleteItem);
};
