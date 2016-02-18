const path = require('path');

module.exports = {
	title: 'Style guide example',
	rootDir: './lib',
	components: function(config, glob) {
		return glob.sync(config.rootDir + '/components/**/*.js').filter(function(module) {
			return /\/[A-Z]\w*\.js$/.test(module);
		});
	},
	updateWebpackConfig: function(webpackConfig, env) {
		// Uncomment below to enable a customised styleguide based on ./lib/components
		webpackConfig.resolve.alias['rsg-components/Layout'] = path.join(__dirname, 'lib/styleguide/components/Layout');
		webpackConfig.resolve.alias['rsg-components/ReactComponent/Renderer'] = path.join(__dirname, 'lib/styleguide/components/ReactComponent/Renderer');
		return webpackConfig;
	}
};
