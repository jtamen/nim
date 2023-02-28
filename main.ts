input.onButtonPressed(Button.A, function () {
    radio.sendNumber(10)
    basic.showLeds(`
        . # . . #
        . # . # #
        . # . . #
        . # . . #
        # . . . #
        `)
})
