// Primary Key = (periode, item)
module.exports = (db) =>
  db.model(
    'gachaItems',
    db.Schema({
      periode: Number,
      item: String,
      quantity: Number,
    })
  );
