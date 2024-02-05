module.exports = async function(context, commands) {
    const seleniumWebdriver = context.selenium.webdriver
    const seleniumDriver = context.selenium.driver
    seleniumDriver.manage().window().maximize()
        // We start by navigating to the login page.
    await commands.measure.start("01_Open_Main_Page");
    await commands.navigate('https://jmeter.apache.org/')

    // Add text into an input field, finding the field by id

    await commands.wait.byXpath('//*[contains(text(), "Distributed Testing")]', 60000);
    await commands.click.byXpath('//*[contains(text(), "Distributed Testing")]');
    await commands.measure.stop();
}