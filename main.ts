radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        robotbit.Servo(robotbit.Servos.S3, 107)
    } else if (receivedNumber == 2) {
        robotbit.Servo(robotbit.Servos.S4, 131)
    } else if (receivedNumber == 3) {
        robotbit.Servo(robotbit.Servos.S6, 138)
    } else if (receivedNumber == 4) {
        robotbit.Servo(robotbit.Servos.S3, 0)
        robotbit.Servo(robotbit.Servos.S4, 0)
        robotbit.Servo(robotbit.Servos.S6, 0)
    }
})
basic.showIcon(IconNames.Heart)
radio.setGroup(1)
robotbit.Servo(robotbit.Servos.S3, 129)
robotbit.Servo(robotbit.Servos.S4, 0)
robotbit.Servo(robotbit.Servos.S6, 0)
