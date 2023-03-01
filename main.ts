input.onButtonPressed(Button.A, function () {
    basic.showNumber(walk)
})
let walk = 0
walk = 0
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) > 0) {
        walk += 1
        basic.pause(100)
    }
})
