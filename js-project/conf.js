const { SpecReporter } = require('jasmine-spec-reporter');
HtmlReporter = require('protractor-beautiful-reporter');

//Extract the date to include it in the report
function executionDate(){
  var today = new Date();
  return today.getDate() + '-' + today.getMonth() + '-' + today.getFullYear() /* + ' -' + today.getHours()  + ':' + today.getMinutes();*/
}

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
    browserName: 'chrome',
      'chromeOptions': {
        args:[
          '--window-size=1600,900',
          /*'--headless'*/]
      }
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
    realtimeFailure: true,
    showColors: true, // Use colors in the command line report.
    includeStackTrace: true,
    defaultTimeoutInterval: 20000,
  },
  onPrepare: function() {
    // Generate reports in the terminal
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));    
    // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
    jasmine.getEnv().addReporter(new HtmlReporter({       
      baseDirectory: 'Reports/runs/' + executionDate()
      , docTitle: 'My Report from: '+ executionDate()
    }).getJasmine2Reporter());
  }
}
