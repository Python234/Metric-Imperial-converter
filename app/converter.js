module.exports = data => {
  
  let result = 0;
  
  switch(data.type)
  {
    case 'celcius-to-fahrenheit':
      result = Math.round((data.value * 9/5 + 32) * 100.0)/100.0;
      break;
    case 'fahrenheit-to-celcius':
      result = Math.round(((data.value - 32) * 5/9) * 100.0)/100.0;
      break;
    case 'kilometers-to-miles':
      result = Math.round(data.value * 0.62 * 100) / 100.0;
      break;
    case 'miles-to-kilometers':
      result = Math.round(data.value * 1.61 * 100) / 100.0;
      break;
    case 'kilometers-to-feet':
      result = Math.round(data.value * 3280.8 * 100.0) / 100.0;
      break;
    case 'meters-to-feet':
      result = Math.round(data.value * 3.28 * 100.0) / 100.0;
      break;
    case 'feet-to-meters':
      result = Math.round(data.value * 0.3 * 100.0) / 100.0;
      break;
    case 'centimeters-to-inches':
      result = Math.round(data.value * 0.39 * 100.0) / 100.0;
      break;
    case 'inches-to-centimeters':
      result = Math.round(data.value * 2.54 * 100.0) / 100.0;
      break;
    case 'millimeters-to-inches':
      result = Math.round(data.value * 0.039 * 100.0) / 100.0;
      break;
    case 'inches-to-millimeters':
      result = Math.round(data.value * 25.4 * 100.0) / 100.0;
      break;
    case 'liters-to-quarts':
      result = Math.round(data.value * 1.057 * 100.0) / 100.0;
      break;
    case 'quarts-to-liters':
      result = Math.round(data.value * 0.95 * 100.0) / 100.0;
      break;
    case 'liters-to-gallons':
      result = Math.round(data.value * 0.264 * 100.0) / 100.0;
      break;
    case 'gallons-to-liters':
      result = Math.round(data.value * 3.785 * 100.0) / 100.0;
      break;
    case 'milliliters-to-cups':
      result = Math.round(data.value * 0.0042 * 100.0) / 100.0;
      break;
    case 'cups-to-milliliters':
      result = Math.round(data.value * 236.6 * 100.0) / 100.0;
      break;
    case 'milliliters-to-ounces':
      result = Math.round(data.value * 0.0388 * 100.0) / 100.0;
      break;
    case 'ounces-to-milliliters':
      result = Math.round(data.value * 29.57 * 100.0) / 100.0;
      break;
    case 'kilograms-to-tons':
      result = Math.round(data.value * 0.0011 * 100.0) / 100.0;
      break;
    case 'tons-to-kilograms':
      result = Math.round(data.value * 907.18 * 100.0) / 100.0;
      break;
    case 'kilograms-to-pounds':
      result = Math.round(data.value * 2.2046 * 100.0) / 100.0;
      break;
    case 'pounds-to-kilograms':
      result = Math.round(data.value * 0.454 * 100.0) / 100.0;
      break;
    case 'grams-to-ounces':
      result = Math.round(data.value * 0.035 * 100.0) / 100.0;
      break;
    case 'ounces-to-grams':
      result = Math.round(data.value * 28.35 * 100.0) / 100.0;
      break;
    case 'grams-to-pounds':
      result = Math.round(data.value * 0.002205 * 100.0) / 100.0;
      break;
    case 'pounds-to-grams':
      result = Math.round(data.value * 453.51 * 100.0) / 100.0;
      break;
    case 'milligrams-to-ounces':
      result = Math.round(data.value * 0.000035 * 100.0) / 100.0;
      break;
    case 'ounces-to-milligrams':
      result = Math.round(data.value * 28350 * 100.0) / 100.0;
      break;
    default:
      result = 0;
  }
  
  return result;
}