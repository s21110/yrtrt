input.onButtonPressed(Button.A, function () {
    basic.showNumber(walk)
})
input.onButtonPressed(Button.B, function () {
    walk = 0
})
let walk = 0
walk = 0
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) > 800) {
        walk += 1
        basic.pause(900)
    }
})
