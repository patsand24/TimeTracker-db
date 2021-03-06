const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClockOutSchema = new Schema({
  timeOut: { type: Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('ClockOut', ClockOutSchema);