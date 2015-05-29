
var generators = require('yeoman-generator');

var semver = require('semver');

function Package() {
	this.data = { };
}

Package.parse = function(str) {
	return new Package();
}

Package.prototype.dependency = function(name, version, options) {
	var satisfied = false
	if (!this.data.dependencies[name]) {

	}
}

module.exports = generators.Base.extend({
	initializing: function() {

	},
	prompting: function () {

	},
	writing: function() {

		var env = true, babel = true;
		var path = this.destinationPath('package.json');

		var pkg = Package.parse(this.fs.read(path));

		if (env) {
			pkg.dependency('dotenv', '^2.2.2', { dev: true });
		}

		if (babel) {
			pkg.dependency('babel', '^5.0.0', { dev: true });
			pkg.dependency('babel-core', '^5.0.0', { dev: true });
		}

		pkg.ensure('gulp', 'gulpjs/gulp#4.0');
		pkg.ensure('gulp-hub', 'frankwallis/gulp-hub#4.0');

		this.fs.write(path, pkg);
		this.npmInstall();


		this.fs.copyTpl(
			this.templatePath('gulpfile.js'),
			this.destinationPath('gulpfile.js'),
			{
				env: env,
				babel: babel
			}
		);
	}
});
