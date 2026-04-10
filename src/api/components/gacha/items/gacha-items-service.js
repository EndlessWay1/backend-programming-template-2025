const gachaItemsRepository = require('./gacha-items-repository');

async function getValidItems() {
  return gachaItemsRepository.getValidItems();
}

async function getValidItemsByPeriod(periode) {
  return gachaItemsRepository.getValidItemsByPeriod(periode);
}

async function getItems() {
  return gachaItemsRepository.getItems();
}

async function itemExists(periode, name) {
  const user = await gachaItemsRepository.getItemByPeriodnName(periode, name);
  return !!user; // Return true if item exists, false otherwise
}

async function createItem(periode, item, quantity) {
  return gachaItemsRepository.createItem(periode, item, quantity);
}

// delete Items
async function deleteItem(id) {
  return gachaItemsRepository.deleteItem(id);
}

// get items by id
async function getItem(id) {
  return gachaItemsRepository.getItem(id);
}

// gets list of all items in that periode
async function getItemsByPeriod(periode) {
  return gachaItemsRepository.getItemsByPeriod(periode);
}

async function getLatestPeriode() {
  return gachaItemsRepository.getLatestPeriode();
}

async function createItems(data) {
  return gachaItemsRepository.createItems(data);
}

async function chageQuantity(id, quantity) {
  return gachaItemsRepository.changeQuantity(id, quantity);
}

module.exports = {
  getValidItems,
  getItems,
  itemExists,
  createItem,
  createItems,
  deleteItem,
  getItem,
  getItemsByPeriod,
  getValidItemsByPeriod,
  getLatestPeriode,
  chageQuantity,
};
