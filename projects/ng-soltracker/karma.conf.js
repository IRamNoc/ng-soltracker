// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

// enabled this flag to remove skipped tests from the output
module.exports = function (config) {
    var baseConfig = require('../../karma.conf')(config);

    config.set({
        ...baseConfig,
        coverageReporter: {
            ...baseConfig.coverageIstanbulReporter,
            dir: '../../reports/ng-soltracker/coverage',
        },
        junitReporter: {
            outputDir: '../../reports/ng-soltracker/junit',
        },
        files: [
            { pattern: '../../node_modules/@angular/cdk/a11y-prebuilt.css', watched: false },
            { pattern: '../../node_modules/@angular/cdk/overlay-prebuilt.css', watched: false },
            { pattern: '../../dist/ng-soltracker/css/normalize.css', watched: false },
            { pattern: '../../dist/ng-soltracker/themes/aposin.css', watched: false },
            { pattern: './test-styles.css' },
        ],
    });
};
