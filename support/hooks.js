let {
  After,
  AfterAll,
  Before,
  BeforeAll,
  Status,
  setDefaultTimeout,
} = require("@cucumber/cucumber");
let appConfig = require("./appConfig.js")
let { chromium, firefox } = require("playwright") ;
let utils = require('./utils.js');
let scope = require('./scope.js')

setDefaultTimeout(appConfig.waitTime);
BeforeAll(async function () {
  console.log(
    `execution started in ENV = ${appConfig.env} at ${await utils.getTime(
      "DD-MM-YY HH:mm:ss"
    )}`
  );
  await resolveBrowser();
});

Before(async function () {
  console.log(`Application launched ${appConfig.baseURL}`);
  scope.page = await scope.browser.newPage();
  scope.page.setDefaultTimeout(appConfig.pageTimeOut);
  await scope.page.goto(appConfig.baseURL);
  console.log(`Application launched successfully`)
});

After(async function (scenario) {
  let scenarioName = scenario.pickle.name;
  console.log(`Executed scenario : ${scenarioName}`);
  if (scenario.result.status === Status.FAILED) {
    console.log(`Test failed: ${scenarioName}`);
    let image = await scope.page.screenshot({fullPage: true });
    await fs.writeFile(
      `./output/screenshot/failed-${await utils.getTime(
        "DD-MM-YY HH:mm:ss"
      )}-${scenarioName}.png`,
      image,
      function (err) {
        console.log("Failed to upload screenshot error: ", err);
      }
    );
  }
});

AfterAll(async function () {
  console.log(
    `Execution finished in ENV = ${appConfig.env} at ${await utils.getTime(
      "DD-MM-YY HH:mm:ss"
    )}`
  );
  await scope.browser.close();
});

const resolveBrowser = async () => {
  const launchOptions = {
    headless: appConfig.headless,
    slowMo: 0,
  };

  console.log(`executing in ${process.env.BROWSER_TYPE} browser`);
  switch (process.env.BROWSER_TYPE.toLocaleLowerCase()) {
    case "chrome":
      launchOptions.devtools = appConfig.devtools;
      launchOptions.channel = "chrome";
      scope.browser = await chromium.launch(launchOptions);
      break;
    case "firefox":
      scope.browser = await firefox.launch(launchOptions);
  }
};
