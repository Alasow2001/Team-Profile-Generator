const fs = require('fs');

const Manager = require('../team_members/Manager')
const Engineer = require('../team_members/Engineer')
const Intern = require('../team_members/Intern')

const generatePage = (managers, engineers, interns) => {
    let addTeamProfiles = fs.readFileSync('./template/index.html', 'utf8')

    if(addTeamProfiles){

        const managerHTML = '';
        managers.forEach(manager => {
            managerHTML += `
            <div class='box'>
                <div class='box-header'>
                    <h2>Manager</h2>
                </div>
                <div class='box-info'>
                    <h3>${manager.name}</h3>
                    <p>ID: ${manager.id}</p>
                    <p>Email: ${manager.email}</p>
                    <p>Office Number: ${manager.officeNumber}</p>
                </div>
            </div>
            `
        });

        const engineerHTML = '';
        engineers.forEach(engineer => {
            engineerHTML += `
            <div class='box'>
                <div class='box-header'>
                    <h2>Engineer</h2>
                </div>
                <div class='box-info'>
                    <h3>${engineer.name}</h3>
                    <p>ID: ${engineer.id}</p>
                    <p>Email: ${engineer.email}</p>
                    <p>Github username: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
                </div>
            </div>
            `
        });

        const internHTML = '';
        interns.forEach(intern => {
            internHTML += `
            <div class='box'>
                <div class='box-header'>
                    <h2>Intern</h2>
                </div>
                <div class='box-info'>
                    <h3>${intern.name}</h3>
                    <p>ID: ${intern.id}</p>
                    <p>Email: ${intern.email}</p>
                    <p>School: ${intern.school}</p>
                </div>
            </div>
            `
        });

        addTeamProfiles = addTeamProfiles.replace('<!-- MANAGERS -->', managerHTML)
        addTeamProfiles = addTeamProfiles.replace('<!-- ENGINEERS -->', engineerHTML)
        addTeamProfiles = addTeamProfiles.replace('<!-- INTERNS -->', internHTML)

        fs.writeFileSync("./dist/index.html", addTeamProfiles, 'utf8')

        console.log('Created profile page');
    }
}

module.exports = generatePage