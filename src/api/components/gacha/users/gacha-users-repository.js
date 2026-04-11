const { gachaHistory } = require('../../../../models');

// get all of the contents of the table
async function getGachaHis() {
  return gachaHistory.find({});
}

// get all of the contents of the table from a certain periode
async function getGachaPeriodeHis(periode) {
  return gachaHistory.find({ periode });
}

// get all of the contents of the table from a certain name
async function getGachaNameHis(name) {
  return gachaHistory.find({ item: name });
}

// get all of the contents of the table from a certain periode & name
async function getGachaPeriodenNameHis(periode, name) {
  return gachaHistory.find({ periode, item: name });
}

// get all of the wins of the table
async function getGachaWinHis(lossName) {
  return gachaHistory.find({ item: { $not: lossName } });
}

// get all of the periode wins of the table
async function getGachaPeriodeWinHis(periode, lossName) {
  return gachaHistory.find({ item: { $not: lossName }, periode });
}

// get all of the contents of the table
async function getGachaUserHis(email) {
  return gachaHistory.find({ email });
}

// get all of the contents of the table from a certain periode
async function getGachaUsernPeriodeHis(email, periode) {
  return gachaHistory.find({ email, periode });
}

// get all of the contents of the table from a certain name
async function getGachaUsernNameHis(email, name) {
  return gachaHistory.find({ email, item: name });
}

// get all of the contents of the table from a certain periode & name
async function getGachaUsernPeriodenNameHis(email, periode, name) {
  return gachaHistory.find({ email, periode, item: name });
}

// get all of the wins of the table
async function getGachaUserWinHis(email, lossName) {
  return gachaHistory.find({ email, item: { $not: lossName } });
}

// get all of the periode wins of the table
async function getGachaUsernPeriodeWinHis(email, periode, lossName) {
  return gachaHistory.find({ email, item: { $not: lossName }, periode });
}

module.exports = {
  // general user
  getGachaHis,
  getGachaPeriodeHis,
  getGachaNameHis,
  getGachaPeriodenNameHis,
  getGachaWinHis,
  getGachaPeriodeWinHis,
  // specified user
  getGachaUsernPeriodeHis,
  getGachaUserHis,
  getGachaUsernNameHis,
  getGachaUsernPeriodenNameHis,
  getGachaUserWinHis,
  getGachaUsernPeriodeWinHis,
};
