const click = async(locator)=>{
    await scope.page.locator(locator).click();
}

const haveText = async(locator,expectedText)=>{
    await expect(await scope.page.locator(locator)).toHaveText(expectedText.toString())
}

const haveValue = async(locator,expectedValue)=>{
    await expect(await scope.page.locator(locator)).toHaveValue(expectedValue.toString());
}

module.exports = {
    click,
    haveText,
    haveValue
}