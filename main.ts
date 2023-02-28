let strip: neopixel.Strip = null
basic.forever(function () {
    strip = neopixel.create(DigitalPin.P0, 20, NeoPixelMode.RGB)
    strip.show()
    strip.showRainbow(1, 360)
})
