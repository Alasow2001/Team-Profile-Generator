const inquirer = require('inquirer')

const generatePage = require('./pageBuild')

const questions = require('./questions')



const Manager = require('../team_members/Manager')
const Intern = require('../team_members/Intern')
const Engineer = require('../team_members/Engineer')


// Create arrrays of the respective roles
const managers = []
const engineers = []
const interns = []

const runOptions = () => {
    inquirer
    .prompt(questions.addEmployeequestions)
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
                console.log('Building team generator page')
                break;
                
            default:
                console.log('default')
                break;
        }
    })
}

const addManager = () => {
    inquirer
    .prompt(questions.managerQuestions)
    .then((response) => {
        const manager = new Manager(response.name, response.id, response.email, response.officeNumber)
        managers.push(manager)
        console.log(managers)
        runOptions()
    })
}

const addIntern = () => {
    inquirer
    .prompt(questions.internQuestions)
    .then((response) => {
        const intern = new Intern(response.name, response.id, response.email, response.school)
        interns.push(intern)
        console.log(interns)
        runOptions()
    })
}

const addEngineer = () => {
    inquirer
    .prompt(questions.engineerQuestions)
    .then((response) => {
        const engineer = new Engineer(response.name, response.id, response.email, response.github)
        engineers.push(engineer)
        console.log(engineers)
        runOptions()
    })
}

module.exports = runOptions;