function convertTemperature(temp) {
    let kelvinTemp = temp + 273.15;
    let fahrTemp = temp * 9 / 5 + 32;
    return {
        kelvin: kelvinTemp,
        fahrenheit: fahrTemp
    }
}

function updateTemperatures() {
    let temperature = parseInt(tempInput.value);
    let temperatures = convertTemperature(temperature);
    resultElement.innerHTML = `
    <p>La temperatura en Kelvin es de: ${temperatures.kelvin}</p>
    <p>La temperatura en Fahrenheit es de: ${temperatures.fahrenheit}</p>
    `
}

const tempInput = document.getElementById("temp");
const resultElement = document.getElementById("result");
const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", updateTemperatures);

tempInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") updateTemperatures();
})