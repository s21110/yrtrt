input.onButtonPressed(Button.A, function () {
    basic.showNumber(walk)
})
input.onButtonPressed(Button.AB, function () {
    run = 0
    walk = 0
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(run)
})
let run = 0
let walk = 0
walk = 0
run = 0
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) > 700 && input.acceleration(Dimension.Strength) < 1000) {
        walk += 1
        basic.pause(900)
    } else {
        if (input.acceleration(Dimension.Strength) >= 1000 && input.acceleration(Dimension.Strength) < 1300) {
            run += 1
            basic.pause(900)
        }
    }
})
