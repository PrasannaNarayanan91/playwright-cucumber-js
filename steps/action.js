let { Given, Then, When } = require("@cucumber/cucumber");

Then("Click menu {string}", async (option) => {
  await scope.page.locator(`li[id="nav-${option.toLowerCase()}"] > a`).click();
});

Then("Click button {string}", async (button) => {
  await scope.page.locator(`//*[contains(text(),'${button}')]`).click();
});
