var path = require('path');
var glob = require('glob');

module.exports = {
	title: 'Style guide example',
	components: function() {
		return glob.sync(path.resolve(__dirname, 'lib/components/**/*.js')).filter(function(module) {
			return /\/[A-Z]\w*\.js$/.test(module);
		});
	},
	updateWebpackConfig: function(webpackConfig, env) {
		// Supply your own renderers and styles below
		webpackConfig.resolve.alias['rsg-components/Layout/Renderer'] = path.join(__dirname, 'styleguide/components/Layout');
		webpackConfig.resolve.alias['rsg-components/ReactComponent/Renderer'] = path.join(__dirname, 'styleguide/components/ReactComponent');

		webpackConfig.module.loaders.push(
			{
				test: /\.jsx?$/,
				include: __dirname,
				loader: 'babel'
			},
			{
				test: /\.css$/,
				include: __dirname,
				loader: 'style!css?modules&importLoaders=1'
			},
			{
				test: /\.json$/,
				include: path.dirname(require.resolve('dog-names/package.json')),
				loader: 'json'
			}
		);

		return webpackConfig;
	}
};
