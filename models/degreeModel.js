const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const DegreeSchema = new Schema({
	_id: Schema.Types.ObjectId,
	title: String
});

module.exports = mongoose.model('Degree', DegreeSchema);
