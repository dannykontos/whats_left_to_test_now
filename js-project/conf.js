var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    
    capabilities: {
      browserName: 'chrome'
    },
    
    specs: ['./tests/spec.js', './tests/tests-delta/*.js', './tests/tests-tap/*.js'],
    
    suites: {
      demo: './tests/*-spec.js',
      delta: './tests/tests-delta/*.js',
      tap: './tests/tests-tap/*.js',
      //appHome: './e2e/app-home/*-spec.js',
      //login: './e2e/login/*-spec.js',
    },

    jasmineNodeOpts: {
      isVerbose: true,
      showColors: true, // Use colors in the command line report.
      includeStackTrace: true
    },
    
    onPrepare: function() {
      // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
      jasmine.getEnv().addReporter(new HtmlReporter({
         baseDirectory: 'Reports/screenshots'
         , docTitle: 'MY REPORT!!!'
      }).getJasmine2Reporter());
    }
};