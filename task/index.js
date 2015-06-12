
var generators = require('yeoman-generator');
var path = require('path');
var util = require('yeoman-util');

// TODO fix this.

module.exports = generators.Base.extend({
	initializing: function() {

	},
	prompting: util.prompt([{
		type: 'input',
		name: 'name',
		message: 'Your task name'
	}]),
	writing: {
		task: util.copy(function(env) {
			return {
				source: 'es6.task.js',
				destination: env.file,
				overwrite: false
			};
		})
	},
	end: {
		task: util.open(function(env) {
			return env.file;
		})
	}
});
