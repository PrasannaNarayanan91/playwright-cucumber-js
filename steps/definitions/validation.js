Given('Validated application launch', async function () {
  expect(await scope.page.title()).toBe('Jupiter Toys')
});

Then('Validate the {string} field validation error as {string}', async (fieldName, error) => {
  let locator = `[id=${fieldName.toLowerCase()}-err]`, value = error
  await action.haveText(locator, value)
})

Then('Validate error message removed for field {string}', async (fieldName) => {
  expect(scope.page.locator(`[id=${fieldName.toLowerCase()}-err]`)).toBeHidden()
})

Then('Validate submission successful page', async () => {
  let locator = `.alert-success`
  value = `Thanks Test, we appreciate your feedback.`
  await scope.page.waitForSelector(locator, { state: 'attached' })
  await action.haveText(locator, value)
})

Then('Validate the price of {string} is ${float} in cart', async function (product, value) {
  let locator = `//td[contains(text(),'${product}')]/following-sibling::td[1]`
  value = `$${value.toString()}`
  await action.haveText(locator, value)
});

Then('Validate the subtotal of {string} is ${float} in cart', async function (product, value) {
  let locator = `//td[contains(text(),'${product}')]/following-sibling::td[3]`
  value = `$${value.toString()}`
  await action.haveText(locator, value)
});

Then('Validate the total value of product in cart should be {float}', async function (value) {
  let locator = `.total`
  value = `Total: ${value}`
  await action.haveText(locator, value)
});

Then('Validate cart list has {int} {string}', async (value, product) => {
let locator = `//td[contains(text(),'${product}')]/following-sibling::td/input`
await action.haveValue(locator, value)
})