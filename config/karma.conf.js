var webpackConfig = require('./webpack.test');
var argv = require('yargs').argv;
module.exports = function (config) {

  if (argv.test) {
    webpackConfig.module.rules.push(
      {
        test: /\.ts$/,
        enforce: 'post',
        exclude: [/\Test\.ts$/, /node_modules/],
        loader: 'istanbul-instrumenter-loader'
      });
    reporters = ['kjhtml', 'progress', 'junit', 'coverage'];
  } else {
    reporters = ['kjhtml'];
  }
  const coverage = config.singleRun ? ['coverage'] : [];
  var _config = {
    basePath: '',

    frameworks: ['jasmine'],

    files: [
      { pattern: './config/karma-test-shim.js', watched: true }
    ],

    preprocessors: {
      './config/karma-test-shim.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
       stats: 'errors-only'
    },

    webpackServer: {
      noInfo: true
    },

    //reporters: ['kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: true,

    reporters: reporters,
    // Configuración para reporte de junit
    junitReporter: {
      outputDir: 'reporters/test-report/', // results will be saved as $outputDir/$browserName.xml
      outputFile: undefined // if included, results will be saved as $outputDir/$browserName/$outputFile
    },

    // Configuración para reporte de cobertura
    coverageReporter: {
      includeAllSources: true,
      instrumenterOptions: {
        istanbul: { noCompact: true }
      },
      reporters: [
        {
          dir: 'reporters/coverage/',
          subdir: '.',
          type: 'html'
        }, {
          dir: 'reporters/coverage/',
          subdir: '.',
          type: 'cobertura'
        }, {
          dir: 'reporters/coverage/',
          subdir: '.',
          type: 'json'
        }, {
          dir: 'reporters/coverage/',
          subdir: '.',
          type: 'lcovonly',
          file: 'coverage.lcov'
        }
      ]
    },
    // para evitar error en debug
    mime: {
      'text/x-typescript': ['ts', 'tsx']
    }
  };

  config.set(_config);
};
