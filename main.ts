input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        for (let index = 0; index < 6; index++) {
            DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 38)
            basic.pause(500)
            DFRobotMaqueenPlus.mototStop(Motors.ALL)
            basic.pause(100)
            DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, 38)
            basic.pause(500)
            DFRobotMaqueenPlus.mototStop(Motors.ALL)
            basic.pause(100)
        }
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 38)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, 38)
        basic.pause(1000)
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
    }
    for (let index = 0; index < 4; index++) {
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 38)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, 70)
        basic.pause(1000)
    }
    DFRobotMaqueenPlus.mototStop(Motors.ALL)
})
input.onButtonPressed(Button.B, function () {
    while (true) {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.PINK)
        basic.pause(850)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.BLUE)
        basic.pause(850)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
    }
})
DFRobotMaqueenPlus.I2CInit()
basic.forever(function () {
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showString("Javi irakasle hoberena")
})
