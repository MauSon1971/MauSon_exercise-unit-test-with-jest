
// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Utilizo el valor del objeto "USD" para calcular el cambio
    let valueInDollar = valueInEuro * oneEuroIs["USD"];
    // Retorno el valor en dólares
    return valueInDollar;
}

console.log("From EUR to USD: ", fromEuroToDollar(100))


// Convierte Dollar a Yen
const fromDollarToYen = function(valueInDollar) {

    let valueInYen = valueInDollar * oneEuroIs["JPY"] / oneEuroIs["USD"];
    // return the Yen value
    return valueInYen;
};

console.log("From USD to JPY: ", fromDollarToYen(100));

// Convierte YEN to POUND
const fromYenToPound = (valueInYen) => {
    return valueInYen * oneEuroIs["GBP"] / oneEuroIs["JPY"]
}

console.log("From JPY to GBP: ", fromDollarToYen(100));


// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
// We include fromEuroToDollar here as well because it needs to be exported
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound, oneEuroIs };