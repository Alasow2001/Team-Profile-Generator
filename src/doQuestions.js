const inquirer = require('inquirer')

const generatePage = require('./pageBuild')

const Manager = require('../team_members/Manager')
const Intern = require('../team_members/Intern')
const Engineer = require('../team_members/Engineer')

const Questions = require('./questions')


// Create arrrays of the respective roles
const managers = []
const engineers = []
const interns = []

// This will ask the user in the terminal which employee role they would like to add and then build a page
const runStartOptions = () => {
    inquirer
    .prompt(Questions.addEmployeeQuestions)
    .then((response) => {
        switch(response.option){
            case 'Add a Manager':
                addManager()
                break;

            case 'Add an Engineer':
                addEngineer()
                break;

            case 'Add an Intern':
                addIntern()
                break;

            case 'Build the team':
                generatePage(managers, engineers, interns);    
                break;

            default:
                console.log('default')
                break;
        }
    })
}

// This will run the questions for the manager
const addManager = () => {
    inquirer
    .prompt(Questions.managerQuestions)
    .then((response) => {
        const manager = new Manager(response.name, response.id, response.email, response.officeNumber)
        managers.push(manager)
        runStartOptions()
    })
}

// This will run the questions for the intern
const addIntern = () => {
    inquirer
    .prompt(Questions.internQuestions)
    .then((response) => {
        const intern = new Intern(response.name, response.id, response.email, response.school)
        interns.push(intern)
        runStartOptions()
    })
}

// This will run the questions for the engineer
const addEngineer = () => {
    inquirer
    .prompt(Questions.engineerQuestions)
    .then((response) => {
        const engineer = new Engineer(response.name, response.id, response.email, response.github)
        engineers.push(engineer)
        runStartOptions()
    })
}

module.exports = runStartOptions;