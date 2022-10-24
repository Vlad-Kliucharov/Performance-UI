module.exports = async function(context, commands) {
    // We start by navigating to the login page.
    await commands.navigate('https://en.wikipedia.org/w/index.php?title=Special:UserLogin&returnto=Main+Page')

    // Add text into an input field, finding the field by id
    await commands.addText.byId('login', 'michoelkydon')
    await commands.addText.byId('password', 'cFFjHF3*J@-7Sbv')

    await commands.measure.start('login')
    await commands.click.byIdAndWait('wpLoginAttempt')
    await commands.measure.stop()

    await commands.measure.start('https://en.wikipedia.org/wiki/Barack_Obama')

    return commands.measure.start('https://en.wikipedia.org/wiki/President_of_the_United_States')

}