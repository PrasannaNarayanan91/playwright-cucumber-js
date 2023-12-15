let { Given, Then, When } = require("@cucumber/cucumber");

Then("Click menu {string}", async (option) => {
  let locator = `li[id="nav-${option.toLowerCase()}"] > a`
  await action.click(locator)
});

Then("Click button {string}", async (button) => {
  let locator = `//*[contains(text(),'${button}')]`
  await action.click(locator)
});
