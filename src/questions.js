const addEmployeeQuestions = [
    {
        type: 'list',
        name: 'option',
        message: 'What would you like to do?',
        choices: ['Add an Engineer', 'Add an Intern', 'Add a Manager', 'Build the team'],
    },
]

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the engineer?',
    },

    {
        type: 'input',
        name: 'id',
        message: 'What is the engineers id?',
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is the engineers email?',
    },

    {
        type: 'input',
        name: 'github',
        message: 'What is their github username?',
    },
]

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the intern?',
    },

    {
        type: 'input',
        name: 'id',
        message: 'What is the interns id?',
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is the interns email?',
    },


    {
        type: 'input',
        name: 'school',
        message: 'What is the name of the interns school?',
    },
]

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the manager?',
    },

    {
        type: 'input',
        name: 'id',
        message: 'What is the managers id?',
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is the managers email?',
    },

    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the managers office number?',
    },
]

module.exports = {addEmployeeQuestions, managerQuestions, engineerQuestions, internQuestions};

