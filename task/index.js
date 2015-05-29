
var generators = require('yeoman-generator');
var path = require('path');
var open = require('open');

module.exports = generators.Base.extend({
	initializing: function() {

	},
	prompting: function () {
		var done = this.async();
		this.prompt({
			type: 'input',
			name: 'name',
			message: 'Your task name'
		}, function (answers) {
			var taskPath = 'tasks';
			this.name = answers.name;
			this.file = this.destinationPath(
				path.join(taskPath, this.name + '.task.js')
			);
			done();
		}.bind(this));
	},
	writing: function() {
		var es6 = true;

		if (es6) {
			template = 'es6.task.js';
		} else {
			template = 'generic.task.js';
		}

		if (!this.fs.exists(this.file)) {
			this.fs.copyTpl(
				this.templatePath(template),
				this.file,
				{
					name: this.name
				}
			);
		}
	},
	end: function() {
		open(this.file);
	}
});
