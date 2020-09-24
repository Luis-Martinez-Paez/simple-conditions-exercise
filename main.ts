let temperature_Celsius = 0
basic.forever(function () {
    temperature_Celsius = input.temperature()
    basic.showNumber(temperature_Celsius)
    if (temperature_Celsius == 10) {
        basic.showString("Ski time!")
    }
    if (temperature_Celsius == 20) {
        basic.showString("Picnic time!")
    }
    if (temperature_Celsius == 30) {
        basic.showString("Beach time!")
    }
    if (temperature_Celsius == 40) {
        basic.showString("It is better to stay at home")
    }
})
