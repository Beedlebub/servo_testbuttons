input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # . . .
        # . . . .
        . # . . .
        . . # . .
        `)
    servos.P0.setAngle(buttonA_setAngle)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # # # # #
        # . . . #
        # . # . #
        # . . . #
        # # # # #
        `)
    servos.P0.setAngle(bothButtons_setAngle)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # . .
        . . . # .
        . . . . #
        . . . # .
        . . # . .
        `)
    servos.P0.setAngle(buttonB_setAngle)
})
let bothButtons_setAngle = 0
let buttonB_setAngle = 0
let buttonA_setAngle = 0
let minAngle = 20
let maxAngle = 160
buttonA_setAngle = 30
buttonB_setAngle = 150
bothButtons_setAngle = 90
servos.P0.setRange(minAngle, maxAngle)
servos.P0.setAngle(bothButtons_setAngle)
servos.P0.stop()
