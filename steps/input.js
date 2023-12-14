let { Given, Then, When } = require('@cucumber/cucumber')

Then('Enter {string} in {string} field', async (value, fieldName) => {
    await scope.page.getByLabel(fieldName.toLowerCase()).fill(value)
})

Then('Add {int} {string} to cart', async (count, product) => {
    for (let times = 0; times < count; times++) {
        await scope.page.locator(`//*[contains(text(),'${product}')]/parent::div/p/a`).click();
    }
})