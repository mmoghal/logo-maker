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

function promptUser() {
  inquirer
    .prompt([
      {
        type: "input",
        message:
          "Select the text you would like to display in the logo (Enter up to three characters)",
        name: "text",
      },

   
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
