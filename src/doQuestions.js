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

const runStartOptions = () => {
    inquirer
    .prompt(Questions.addEmployeeQuestions)
    .then((response) => {
        switch(response.option){
            case 'Add Manager':
                addManager()
                break;

            case 'Add Engineer':
                addEngineer()
                break;

            case 'Add Intern':
                addIntern()
                break;

            case 'Build Team Page':
                generatePage(managers, engineers, interns);    
                break;

            default:
                console.log('default')
                break;
        }
    })
}

const addManager = () => {
    inquirer
    .prompt(Questions.managerQuestions)
    .then((response) => {
        const manager = new Manager(response.name, response.id, response.email, response.officeNumber)
        managers.push(manager)
        runStartOptions()
    })
}

const addIntern = () => {
    inquirer
    .prompt(Questions.internQuestions)
    .then((response) => {
        const intern = new Intern(response.name, response.id, response.email, response.school)
        interns.push(intern)
        runStartOptions()
    })
}

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