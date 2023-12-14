const reporter = require ('cucumber-html-reporter')
let options = {
    theme: 'bootstrap',
    jsonFile: 'output/reports/cucumber-json-report.json',
    output: 'output/reports/cucumber-html-report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    metadata: {
        "Test Environment": `Dev`
    }
};

reporter.generate(options);
console.log('Report Generated under report folder.')