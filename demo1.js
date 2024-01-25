module.exports = async function(context, commands) {
    // We start by navigating to the login page.
    await commands.navigate('https://www.google.com/')

    // Add text into an input field, finding the field by id

    await commands.measure.start('https://www.google.com/doodles')

    return commands.measure.start('https://www.google.com/doodles/croatia-statehood-day-2024')

}