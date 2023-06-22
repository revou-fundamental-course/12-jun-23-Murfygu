let toFahrenheit = true;

//reset button
function reset() {
    document.getElementById("OutputField").innerHTML = fahrenheit = ''
    document.getElementById("InputField").value = ''
    document.getElementById("CalculationField").innerHTML = ''
}

//reverse button
function reverse() {
    toFahrenheit = !toFahrenheit
    reset()
    if(toFahrenheit) {
        document.getElementById("inputLabel").innerHTML = "Celcius"
    document.getElementById("outputLabel").innerHTML = "Fahrenheit"
    }
    else {
        document.getElementById("inputLabel").innerHTML = "Fahrenheit"
        document.getElementById("outputLabel").innerHTML = "Celcius"
    }
}

//convert button
function convert() {
    if (toFahrenheit) {
        var celcius = document.getElementById("InputField").value
        fahrenheit = celcius * 9/5 + 32
        document.getElementById("OutputField").innerHTML = fahrenheit;
        document.getElementById("CalculationField").innerHTML = celcius + " * 9/5 + 32 = " + fahrenheit;
    }
    else{
        var fahrenheit = document.getElementById("InputField").value
        celcius = ( fahrenheit - 32 ) * 5/9
        document.getElementById("OutputField").innerHTML = celcius;
        document.getElementById("CalculationField").innerHTML = celcius + " * 9/5 + 32 = " + fahrenheit;
    }
}