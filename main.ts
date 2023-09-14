basic.forever(function () {
    pins.servoWritePin(AnalogPin.P2, Math.map(input.compassHeading(), 0, 360, 0, 180))
    led.plotBarGraph(
    Math.map(input.compassHeading(), 0, 360, 0, 180),
    180
    )
    basic.pause(200)
})
