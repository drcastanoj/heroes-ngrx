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
    reporters = [ 'progress', 'coverage'];
  } else {
    reporters = ['progress'];
  }
  const coverage = config.singleRun ? ['coverage'] : [];
  var _config = {
    basePath: '',

    frameworks: ['sinon', 'mocha', 'chai'],
    plugins: [
      'karma-chrome-launcher',
      "karma-chai",
      "karma-sinon-chai",
      "karma-coverage",
      "karma-mocha",
      "karma-sinon",
      "karma-webpack",
      "karma-sourcemap-loader",
      "karma-remap-istanbul"
    ],
    files: [
      '**/**.spec.ts'
    ],

    preprocessors: {
      '**/**.spec.ts': ['webpack', 'sourcemap'],

    },

    webpack: webpackConfig,

    webpackMiddleware: {
      stats: 'errors-only'
    },

    webpackServer: {
      noInfo: true
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_DEBUG,
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
    client: {
      captureConsole: true,
      mocha: {
        bail: true
      }
    },
    // para evitar error en debug
    mime: {
      'text/x-typescript': ['ts', 'tsx']
    }
  };

  config.set(_config);
};
