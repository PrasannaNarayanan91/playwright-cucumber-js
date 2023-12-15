Then('Enter {string} in {string} field', async (value, fieldName) => {
    await scope.page.getByLabel(fieldName.toLowerCase()).fill(value)
})

Then('Add {int} {string} to cart', async (count, product) => {
    let locator = `//*[contains(text(),'${product}')]/parent::div/p/a`
    for (let times = 0; times < count; times++) {
        await action.click(locator)
    }
})