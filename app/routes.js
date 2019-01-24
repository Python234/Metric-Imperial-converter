

module.exports = (app, converte) => {

  app.route('/')
    .get((req, res) => {
      res.render(process.cwd() + "/views/index.pug",
                 {
                    path: 'celcius-to-fahrenheit',
                    base_label_text: 'Celcius',
                    result_label_text: 'Fahrenheit'
                 }
                );
    });
  
  app.route('/convert/celcius-to-fahrenheit')
    .get((req, res) => {
      const path = 'celcius-to-fahrenheit';
      res.render(process.cwd() + "/views/index.pug",
                 {
                    path: path,
                    initial: 'Celcius to Fahrenheit',
                    base_label_text: 'Celcius',
                    result_label_text: 'Fahrenheit',
                    base: req.query.base,
                    result: converte({type: path, value: req.query.base})
                 });
    });
  
  app.route('/convert/fahrenheit-to-celcius')
    .get((req, res) => {
      const path = 'fahrenheit-to-celcius';
      res.render(process.cwd() + "/views/index.pug",
                 {
                    path: path,
                    initial: 'Fahrenheit to Celcius',
                    base_label_text: 'Fahrenheit',
                    result_label_text: 'Celcius',
                    base: req.query.base,
                    result: converte({type: path, value: req.query.base})
                 });
    });
  
  app.route('/convert/kilometers-to-miles')
    .get((req, res) => {
      const path = 'kilometers-to-miles';
      res.render(process.cwd() + "/views/index.pug",
                 {
                    path: path,
                    initial: 'Kilometers to Miles',
                    base_label_text: 'Kilometers',
                    result_label_text: 'Miles',
                    base: req.query.base,
                    result: converte({type: path, value: req.query.base})
                 });
    });
  
  app.route('/convert/miles-to-kilometers')
    .get((req, res) => {
      const path = 'miles-to-kilometers';
      res.render(process.cwd() + "/views/index.pug",
                 {
                    path: path,
                    initial: 'Miles to Kilometers',
                    base_label_text: 'Miles',
                    result_label_text: 'Kilometers',
                    base: req.query.base,
                    result: converte({type: path, value: req.query.base})
                 });
    });
  
  app.route('/convert/kilometers-to-feet')
    .get((req, res) => {
      const path = 'kilometers-to-feet';
      res.render(process.cwd() + "/views/index.pug",
                 {
                    path: path,
                    initial: 'Kilometers to Feet',
                    base_label_text: 'Kilometers',
                    result_label_text: 'Feet',
                    base: req.query.base,
                    result: converte({type: path, value: req.query.base})
                 });
    });
  
  app.route('/convert/meters-to-feet')
    .get((req, res) => {
      const path = 'meters-to-feet';
      res.render(process.cwd() + "/views/index.pug",
                 {
                    path: path,
                    initial: 'Meters to Feet',
                    base_label_text: 'Meters',
                    result_label_text: 'Feet',
                    base: req.query.base,
                    result: converte({type: path, value: req.query.base})
                 });
    });
  
  app.route('/convert/feet-to-meters')
    .get((req, res) => {
      const path = 'feet-to-meters';
      res.render(process.cwd() + "/views/index.pug",
                 {
                    path: path,
                    initial: 'Feet to Meters',
                    base_label_text: 'Feet',
                    result_label_text: 'Meters',
                    base: req.query.base,
                    result: converte({type: path, value: req.query.base})
                 });
    });
  
  app.route('/convert/centimeters-to-inches')
    .get((req, res) => {
      const path = 'centimeters-to-inches';
      res.render(process.cwd() + "/views/index.pug",
                 {
                    path: path,
                    initial: 'Centimeters to Inches',
                    base_label_text: 'Centimeters',
                    result_label_text: 'Inches',
                    base: req.query.base,
                    result: converte({type: path, value: req.query.base})
                 });
    });
  
  app.route('/convert/inches-to-centimeters')
    .get((req, res) => {
      const path = 'inches-to-centimeters';
      res.render(process.cwd() + "/views/index.pug",
                 {
                    path: path,
                    initial: 'Inches to Centimeters',
                    base_label_text: 'Inches',
                    result_label_text: 'Centimeters',
                    base: req.query.base,
                    result: converte({type: path, value: req.query.base})
                 });
    });
  
  app.route('/convert/millimeters-to-inches')
    .get((req, res) => {
      const path = 'millimeters-to-inches';
      res.render(process.cwd() + "/views/index.pug",
                 {
                    path: path,
                    initial: 'Millimeters to Inches',
                    base_label_text: 'Millimeters',
                    result_label_text: 'Inches',
                    base: req.query.base,
                    result: converte({type: path, value: req.query.base})
                 });
    });
  
  app.route('/convert/inches-to-millimeters')
    .get((req, res) => {
      const path = 'inches-to-millimeters';
      res.render(process.cwd() + "/views/index.pug",
                 {
                    path: path,
                    initial: 'Inches to Millimeters',
                    base_label_text: 'Inches',
                    result_label_text: 'Millimeters',
                    base: req.query.base,
                    result: converte({type: path, value: req.query.base})
                 });
    });
  
  app.route('/convert/liters-to-quarts')
    .get((req, res) => {
      const path = 'liters-to-quarts';
      res.render(process.cwd() + "/views/index.pug",
                 {
                    path: path,
                    initial: 'Liters to Quarts',
                    base_label_text: 'Liters',
                    result_label_text: 'Quarts',
                    base: req.query.base,
                    result: converte({type: path, value: req.query.base})
                 });
    });
  
  app.route('/convert/quarts-to-liters')
    .get((req, res) => {
      const path = 'quarts-to-liters';
      res.render(process.cwd() + "/views/index.pug",
                 {
                    path: path,
                    initial: 'Quarts to Liters',
                    base_label_text: 'Quarts',
                    result_label_text: 'Liters',
                    base: req.query.base,
                    result: converte({type: path, value: req.query.base})
                 });
    });
  
  app.route('/convert/liters-to-gallons')
    .get((req, res) => {
      const path = 'liters-to-gallons';
      res.render(process.cwd() + "/views/index.pug",
                 {
                    path: path,
                    initial: 'Liters to Gallons',
                    base_label_text: 'Liters',
                    result_label_text: 'Gallons',
                    base: req.query.base,
                    result: converte({type: path, value: req.query.base})
                 });
    });
  
  app.route('/convert/gallons-to-liters')
    .get((req, res) => {
      const path = 'gallons-to-liters';
      res.render(process.cwd() + "/views/index.pug",
                 {
                    path: path,
                    initial: 'Gallons to Liters',
                    base_label_text: 'Gallons',
                    result_label_text: 'Liters',
                    base: req.query.base,
                    result: converte({type: path, value: req.query.base})
                 });
    });
  
  app.route('/convert/milliliters-to-cups')
    .get((req, res) => {
      const path = 'milliliters-to-cups';
      res.render(process.cwd() + "/views/index.pug",
                 {
                    path: path,
                    initial: 'Milliliters to Cups',
                    base_label_text: 'Milliliters',
                    result_label_text: 'Cups',
                    base: req.query.base,
                    result: converte({type: path, value: req.query.base})
                 });
    });
  
  app.route('/convert/cups-to-milliliters')
    .get((req, res) => {
      const path = 'cups-to-milliliters';
      res.render(process.cwd() + "/views/index.pug",
                 {
                    path: path,
                    initial: 'Cups to Milliliters',
                    base_label_text: 'Cups',
                    result_label_text: 'Milliliters',
                    base: req.query.base,
                    result: converte({type: path, value: req.query.base})
                 });
    });
  
  app.route('/convert/milliliters-to-ounces')
    .get((req, res) => {
      const path = 'milliliters-to-ounces';
      res.render(process.cwd() + "/views/index.pug",
                 {
                    path: path,
                    initial: 'Milliliters to Ounces',
                    base_label_text: 'Milliliters',
                    result_label_text: 'Ounces',
                    base: req.query.base,
                    result: converte({type: path, value: req.query.base})
                 });
    });
  
  app.route('/convert/ounces-to-milliliters')
    .get((req, res) => {
      const path = 'ounces-to-milliliters';
      res.render(process.cwd() + "/views/index.pug",
                 {
                    path: path,
                    initial: 'Ounces to Milliliters',
                    base_label_text: 'Ounces',
                    result_label_text: 'Milliliters',
                    base: req.query.base,
                    result: converte({type: path, value: req.query.base})
                 });
    });
  
  app.route('/convert/kilograms-to-tons')
    .get((req, res) => {
      const path = 'kilograms-to-tons';
      res.render(process.cwd() + "/views/index.pug",
                 {
                    path: path,
                    initial: 'Kilograms to Tons',
                    base_label_text: 'Kilograms',
                    result_label_text: 'Tons',
                    base: req.query.base,
                    result: converte({type: path, value: req.query.base})
                 });
    });
  
  app.route('/convert/tons-to-kilograms')
    .get((req, res) => {
      const path = 'tons-to-kilograms';
      res.render(process.cwd() + "/views/index.pug",
                 {
                    path: path,
                    initial: 'Tons to Kilograms',
                    base_label_text: 'Tons',
                    result_label_text: 'Kilograms',
                    base: req.query.base,
                    result: converte({type: path, value: req.query.base})
                 });
    });
  
  app.route('/convert/kilograms-to-pounds')
    .get((req, res) => {
      const path = 'kilograms-to-pounds';
      res.render(process.cwd() + "/views/index.pug",
                 {
                    path: path,
                    initial: 'Kilograms to Pounds',
                    base_label_text: 'Kilograms',
                    result_label_text: 'Pounds',
                    base: req.query.base,
                    result: converte({type: path, value: req.query.base})
                 });
    });
  
  app.route('/convert/pounds-to-kilograms')
    .get((req, res) => {
      const path = 'pounds-to-kilograms';
      res.render(process.cwd() + "/views/index.pug",
                 {
                    path: path,
                    initial: 'Pounds to Kilograms',
                    base_label_text: 'Pounds',
                    result_label_text: 'Kilograms',
                    base: req.query.base,
                    result: converte({type: path, value: req.query.base})
                 });
    });
  
  app.route('/convert/grams-to-ounces')
    .get((req, res) => {
      const path = 'grams-to-ounces';
      res.render(process.cwd() + "/views/index.pug",
                 {
                    path: path,
                    initial: 'Grams to Ounces',
                    base_label_text: 'Grams',
                    result_label_text: 'Ounces',
                    base: req.query.base,
                    result: converte({type: path, value: req.query.base})
                 });
    });
  
  app.route('/convert/ounces-to-grams')
    .get((req, res) => {
      const path = 'ounces-to-grams';
      res.render(process.cwd() + "/views/index.pug",
                 {
                    path: path,
                    initial: 'Ounces to Grams',
                    base_label_text: 'Ounces',
                    result_label_text: 'Grams',
                    base: req.query.base,
                    result: converte({type: path, value: req.query.base})
                 });
    });
  
  app.route('/convert/grams-to-pounds')
    .get((req, res) => {
      const path = 'grams-to-pounds';
      res.render(process.cwd() + "/views/index.pug",
                 {
                    path: path,
                    initial: 'Grams to Pounds',
                    base_label_text: 'Grams',
                    result_label_text: 'Pounds',
                    base: req.query.base,
                    result: converte({type: path, value: req.query.base})
                 });
    });
  
  app.route('/convert/pounds-to-grams')
    .get((req, res) => {
      const path = 'pounds-to-grams';
      res.render(process.cwd() + "/views/index.pug",
                 {
                    path: path,
                    initial: 'Pounds to Grams',
                    base_label_text: 'Pounds',
                    result_label_text: 'Grams',
                    base: req.query.base,
                    result: converte({type: path, value: req.query.base})
                 });
    });
  
  app.route('/convert/milligrams-to-ounces')
    .get((req, res) => {
      const path = 'milligrams-to-ounces';
      res.render(process.cwd() + "/views/index.pug",
                 {
                    path: path,
                    initial: 'Milligrams to Ounces',
                    base_label_text: 'Milligrams',
                    result_label_text: 'Ounces',
                    base: req.query.base,
                    result: converte({type: path, value: req.query.base})
                 });
    });
  
  app.route('/convert/ounces-to-milligrams')
    .get((req, res) => {
      const path = 'ounces-to-milligrams';
      res.render(process.cwd() + "/views/index.pug",
                 {
                    path: path,
                    initial: 'Ounces to Milligrams',
                    base_label_text: 'Ounces',
                    result_label_text: 'Milligrams',
                    base: req.query.base,
                    result: converte({type: path, value: req.query.base})
                 });
    });
  
  app.use((req, res, next) => {
    res.redirect('/');
  });
}