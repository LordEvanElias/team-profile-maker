// Enter the team manager’s name, employee ID, email address, and office number
// Menu to add engineer/intern/or finish building team
// Select engineer: I am prompted to enter the engineer’s name, ID, email, and GitHub username,
// I am taken back to the menu
// Select intern: enter the intern’s name, ID, email, and school,
// Select Finish
// Generate HTML File
const inquirer = require("inquirer");
const fs = require("fs");

// Generate HTML
const generateHTML = ({ managerName, managerID, managerEmail, managerNumber }) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Builder</title>
</head>
<body>
<div>${managerName} </div>
<div>${managerID} </div>
<div>${managerEmail} </div>
<div>${managerNumber} </div>
</body>
</html>`;
// Ask Questions to Populate HTML
inquirer
  .prompt([
    {
      type: "input",
      message: "What is your manager's name?",
      name: "managerName",
    },

    {
      type: "input",
      message: "What is your manager's employee ID?",
      name: "managerID",
    },

    {
      type: "input",
      message: "What is your manager's email?",
      name: "managerEmail",
    },

    {
      type: "input",
      message: "What is your manager's number?",
      name: "managerNumber",
    },

    {
      type: "list",
      message: "Add an Engineer or an Intern or Finish?",
      name: "mainMenu",
      choices: ["Engineer", "Intern", "Finish"],
    },
  ])
  .then((answers) => {
    console.log(answers);
    const parseHTML = generateHTML(answers);
    // Write to File
    fs.writeFile("team.html", parseHTML, (err) => (err ? console.error(err) : console.log("Success!")));
  });
