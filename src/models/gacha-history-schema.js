module.exports = (db) =>
  db.model(
    'gachaHistory',
    db.Schema({
      email: String,
      periode: Number,
      item: String,
      date: Date,
    })
  );
