const inquirer = require('inquirer');
const fs = require('fs');

const addEmployeequestions = [
    {
        type: 'list',
        name: '',
        message: 'What would you like to do?',
        choices: ['Add an engineer', 'Add an Intern', 'Add a manager', 'Build the team']
    }
]

const engineerQuestions = [
    {
        type: 'input',
        name: 'engineer',
        message: 'What is the name of the engineer?'
    }
]

const internQuestions = [
    {
        type: 'input',
        name: 'intern',
        message: 'What is the name of the intern?'
    }
]

const managerQuestions = [
    {
        type: 'input',
        name: 'manager',
        message: 'What is the name of the manager?'
    }
]

