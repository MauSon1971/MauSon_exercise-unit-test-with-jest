
// Import the function from app.js
const { fromEuroToDollar, fromDollarToYen, fromYenToPound, oneEuroIs } = require('./app.js');

test("Convierte 100 euros a USD usando la tasa de cambio actual", function () {
    // Utilizo la tasa de cambio dinámica para el test
    const currentRate = oneEuroIs["USD"];
    const expectedValue = 100 * currentRate;

    // Comprobación
    expect(fromEuroToDollar(100)).toBe(expectedValue); // 100 euros is 107 dollars, then 3.5 euros should be = (3.5 * 1.07)
})


test("Convierte 100 USD a YEN usando la tasa de cambio actual", () => {
    const usdToJpyRate = oneEuroIs["JPY"] / oneEuroIs["USD"];
    const expectedValue = 100 * usdToJpyRate;

    // Comprobación
    expect(fromDollarToYen(100)).toBe(expectedValue);
})

test("Convierte 100 YEN a GBP usando la tasa de cambio actual", () => {
    
    const jpyToGbpRate = oneEuroIs["GBP"] / oneEuroIs["JPY"];
    const expectedValue = 100 * jpyToGbpRate;

    /// Comprobación
    expect(fromYenToPound(100)).toBe(expectedValue);
})