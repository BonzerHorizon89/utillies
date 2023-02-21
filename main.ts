let _30_sec = 0
let degrees = 0
input.onButtonPressed(Button.A, function () {
    _30_sec = 30
    for (let index = 0; index < 32; index++) {
        if (_30_sec == 15) {
            basic.showNumber(15)
        }
        if (_30_sec > -1) {
            basic.pause(1000)
            _30_sec = _30_sec - 1
        } else {
            basic.showString("Times up")
        }
    }
})
input.onGesture(Gesture.ScreenUp, function () {
    degrees = input.compassHeading()
    if (degrees < 45) {
        basic.showString("N")
    } else if (degrees < 225) {
        basic.showString("S")
    } else if (degrees < 315) {
        basic.showString("W")
    } else if (degrees < 135) {
        basic.showString("E")
    } else {
        basic.showString("N")
    }
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 100; index++) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # . .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # . # .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . . # # .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . # # # .
            . . . # .
            . # # # .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . # # .
            . # . # .
            . # # # .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . # . # .
            . # . # .
            . # # # .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . # # . .
            . # . # .
            . # # # .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . . .
            . # # # .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.temperature())
})
