const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Square, Triangle } = require("./lib/Shape");

function writeToFile(fileName, answers) {
  let svgString = "";
  svgString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
  svgString += "<g>";
  svgString += `${answers.shape}`;

  let shapeChoice;
  if (answers.shape === "Triangle") {
    shapeChoice = new Triangle();
    svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
  } else if (answers.shape === "Square") {
    shapeChoice = new Square();
    svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`;
  } else {
    shapeChoice = new Circle();
    svgString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
  }

  svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
  svgString += "</g>";
  svgString += "</svg>";

  fs.writeFile(fileName, svgString, (err) => {
    err ? console.log(err) : console.log("Generated logo.svg");
  });
}

inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
      validate: function (value) {
        const valid = /^[a-zA-Z]{0,3}$/.test(value);
        return valid || 'Please enter up to three letters.';
      },
    },
    {
      type: 'input',
      name: 'color',
      message: 'Enter a color keyword (or a hexadecimal number):',
      validate: function (value) {
        const valid =
          /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(value) ||
          /(red|orange|yellow|green|blue|purple|pink|black|white)/.test(value);
        return valid || 'Please enter a valid color.';
      },
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape:',
      choices: ['Circle', 'Square', 'Triangle'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter a color keyword (or a hexadecimal number) for the shape:',
      validate: function (value) {
        const valid =
          /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(value) ||
          /(red|orange|yellow|green|blue|purple|pink|black|white)/.test(value);
        return valid || 'Please enter a valid color.';
      },
    },
    {
      type: 'input',
      name: 'radius',
      message: 'Enter the radius of the circle (in pixels):',
      when: function (answers) {
        return answers.shape === 'Circle';
      },
      validate: function (value) {
        const valid = /^[1-9]\d*$/.test(value);
        return valid || 'Please enter a positive integer.';
      },
    },
    {
      type: 'input',
      name: 'sideLength',
      message: 'Enter the length of a side of the square (in pixels):',
      when: function (answers) {
        return answers.shape === 'Square';
      },
      validate: function (value) {
        const valid = /^[1-9]\d*$/.test(value);
        return valid || 'Please enter a positive integer.';
      },
    },
    {
      type: 'input',
      name: 'height',
      message: 'Enter the height of the triangle (in pixels):',
      when: function (answers) {
        return answers.shape === 'Triangle';
      },
      validate: function (value) {
        const valid = /^[1-9]\d*$/.test(value);
        return valid || 'Please enter a positive integer.';
      },
    },
  ])
  .then((answers) => {
    let shape;
    switch (answers.shape) {
      case 'Circle':
        shape = new Circle(answers.shapeColor, parseInt(answers.radius));
        break;
      case 'Square':
        shape = new Square(answers.shapeColor, parseInt(answers.sideLength));
        break;
      case 'Triangle':
        shape = new Triangle(answers.shapeColor, parseInt(answers.height));
        break;
    }

    const svgString = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shape.render()}
      <text x="50%" y="50%" text-anchor="middle" font-size="50" fill="${answers.color}">
        ${answers.text}
      </text>
      </svg>`;

    fs.writeFile('output.svg', svgString, (err) => {
      if (err) throw err;
      console.log('SVG file has been saved!');
    });

    fs.writeFile('logo.svg', svgString, (err) => {
      if (err) throw err;
      console.log('Generated logo.svg');
    });
  })
  .catch((error) => {
    console.log(error);
  });
