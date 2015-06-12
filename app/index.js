
var generators = require('yeoman-generator');
var util = require('yeoman-util');
var assign = require('lodash/object/assign');

module.exports = generators.Base.extend({
	initializing: function() {
		this.data = { };
	},
	prompting: util.prompt([{
		type: 'input',
		name: 'babel',
		message: 'Use ES6 in task definitions',
		default: true
	}, {
		type: 'input',
		name: 'env',
		message: 'Include variables from .env files.',
		default: true
	}]),
	writing: {
		package: util.manifest(),
		gulpfile: util.copy('gulpfile.js')
	},
	end: {

	}
});
