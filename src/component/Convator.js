export function celsiusToFahrenheit (celsius) {
    return (celsius*9/5) + 32
} 

export function fahrenheitToCelsius (fahrenheit) {
    return (fahrenheit - 32)* 5/9
}

export function Convartor (tempearature, convertTo) {
    const input = parseFloat(tempearature)
    if(Number.isNaN(input)){
        return "";
    }

    const convart = convertTo(input)
    const round = Math.round(convart * 1000)/1000
    return round.toString()
}

