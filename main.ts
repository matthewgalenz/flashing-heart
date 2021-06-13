let hand = randint(0, 2)
if (hand == 0) {
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        . # # # .
        `)
} else if (hand == 1) {
    basic.showLeds(`
        # # . . #
        # # . # .
        . # # . .
        # # . # .
        # # . . #
        `)
} else {
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
}

