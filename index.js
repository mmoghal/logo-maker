const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Square, Circle } = require("./lib/Shape");

function writeToFile(fileName, answers) {
  let logoSVG = "";
  logoSVG = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
  logoSVG += "<g>";
  logoSVG += `${answers.shape}`;

  let selectedShape;
  if (answers.shape === "Triangle") {
    selectedShape = new Triangle();
    logoSVG += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
  } else if (answers.shape === "Square") {
    selectedShape = new Square();
    logoSVG += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`;
  } else {
    selectedShape = new Circle();
    logoSVG += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
  }

  logoSVG += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
  logoSVG += "</g>";
  logoSVG += "</svg>";

  fs.writeFile(fileName, logoSVG, (err) => {
    if (err) {
      console.log("Error occurred while generating the logo SVG file.");
      console.log(err);
    } else {
      console.log(`Generated ${fileName}`);
    }
  });
}

function promptUser() {
  inquirer
    .prompt([
      {
        type: "input",
        message:
          "Select the text to appear on your logo (up to three characters):",
        name: "text",
      },
      {
        type: "input",
        message:
          "Choose the color of your logo text (Enter color keyword OR a hexadecimal number):",
        name: "textColor",
      },
      {
        type: "list",
        message: "Select the shape to render in your logo:",
        choices: ["Triangle", "Square", "Circle"],
        name: "shape",
      },
      {
        type: "input",
        message:
          "Choose the color of the logo shape (Enter color keyword OR a hexadecimal number):",
        name: "shapeBackgroundColor",
      },
      {
        type: "input",
        message: "Enter a file name for your logo:",
        name: "fileName",
        validate: function (input) {
          if (input.length > 0 && !input.includes("/")) {
            return true;
          } else {
            return "Please enter a valid file name.";
          }
        },
      },
    ])
    .then((answers) => {
      if (answers.text.length > 3) {
        console.log("Must enter a value of no more than 3 characters");
        promptUser();
      } else {
        writeToFile(answers.fileName, answers);
      }
    });
}

promptUser();
