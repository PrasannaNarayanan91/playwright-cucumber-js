let { Given, Then, When, And } = require('@cucumber/cucumber')
let {expect} = require("playwright/test") 

Given('Validated application launch', async function () {
  expect(await scope.page.title()).toBe('Jupiter Toys')
});

Then('Validate the {string} field validation error as {string}', async (fieldName, error) => {
  expect(scope.page.locator(`[id=${fieldName.toLowerCase()}-err]`)).toHaveText(error)
})

Then('Validate error message removed for field {string}', async (fieldName) => {
  expect(scope.page.locator(`[id=${fieldName.toLowerCase()}-err]`)).toBeHidden()
})

Then('Validate submission successful page', async () => {
  await scope.page.waitForSelector('.alert-success', { state: 'attached' })
  expect(scope.page.locator('.alert-success')).toHaveText('Thanks Test, we appreciate your feedback.')
})

Then('Validate cart list has {int} {string}', async (value, product) => {
  await expect(await scope.page.locator(`//td[contains(text(),'${product}')]/following-sibling::td/input`)).toHaveValue(value.toString());
})

Then('Validate the price of {string} is ${float} in cart', async function (product, value) {
  await expect(await scope.page.locator(`//td[contains(text(),'${product}')]/following-sibling::td[1]`)).toHaveText(`$${value.toString()}`);

});

Then('Validate the subtotal of {string} is ${float} in cart', async function (product, value) {
  await expect(await scope.page.locator(`//td[contains(text(),'${product}')]/following-sibling::td[3]`)).toHaveText(`$${value.toString()}`);

});

Then('Validate the total value of product in cart should be {float}', async function (value) {
  expect(await scope.page.locator('.total')).toHaveText(`Total: ${value}`)
});

Then('wait', async () => {
  await scope.page.waitForTimeout(2000);
})