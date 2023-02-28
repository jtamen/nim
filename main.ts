let strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
for (let index = 0; index <= 4; index++) {
    strip.setPixelColor(index + 0, neopixel.colors(NeoPixelColors.Red))
}
basic.forever(function () {
    strip.show()
    strip.showRainbow(1, 360)
})
