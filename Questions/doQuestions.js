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
    .then((answer) => {
        switch(answer.employee){
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
            break

            default:
                console.log('defeault')
                break;
        }
    })
}

const addManager = () => {
    inquirer
    .prompt(questions.managerQuestions)
    .then((answer) => {
        const manager = new Manager(answer.name, answer.id, answer.email, answer.officeNumber)
        Manager.push(manager)
        runOptions()
    })
}

const addIntern = () => {
    inquirer
    .prompt(questions.internQuestions)
    .then((answer) => {
        const intern = new Intern(answer.name, answer.id, answer.email, answer.school)
        Intern.push(intern)
        runOptions()
    })
}

const addEngineer = () => {
    inquirer
    .prompt(questions.engineerQuestions)
    .then((answer) => {
        const engineer = new Engineer(answer.name, answer.id, answer.email, answer.github)
        Engineer.push(engineer)
        runOptions()
    })
}

module.exports = runOptions;