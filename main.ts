input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 6; index++) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 40)
        basic.pause(500)
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
        basic.pause(100)
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, 40)
        basic.pause(500)
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
        basic.pause(100)
    }
})
DFRobotMaqueenPlus.I2CInit()
