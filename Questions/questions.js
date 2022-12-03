
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
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is the engineers email?'
    },

    {
        type: 'input',
        name: 'id',
        message: 'What is the engineers id?'
    },

    {
        type: 'input',
        name: 'github',
        message: 'What is their github username?'
    }
]

const internQuestions = [
    {
        type: 'input',
        name: 'intern',
        message: 'What is the name of the intern?'
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is the interns email?'
    },

    {
        type: 'input',
        name: 'id',
        message: 'What is the interns id?'
    },

    {
        type: 'input',
        name: 'school',
        message: 'What is the name of the interns school?'
    }
]

const managerQuestions = [
    {
        type: 'input',
        name: 'manager',
        message: 'What is the name of the manager?'
    },

    {
        type: 'input',
        name: 'number',
        message: 'What is the managers office number?'
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is the managers email?'
    },

    {
        type: 'input',
        name: 'id',
        message: 'What is the managers id?'
    }
]

module.exports = {addEmployeequestions, managerQuestions, engineerQuestions, internQuestions};

