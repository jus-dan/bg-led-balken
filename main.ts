input.onPinTouchEvent(TouchPin.P0, input.buttonEventDown(), function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    strip.show()
    music.play(music.createSoundExpression(WaveShape.Noise, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    basic.pause(2000)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    strip.show()
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.C16, 20, NeoPixelMode.RGB)
