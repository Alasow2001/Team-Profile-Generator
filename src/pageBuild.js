const fs = require('fs');

const Managers = require('../team_members/Manager')
const Engineers = require('../team_members/Engineer')
const Interns = require('../team_members/Intern')

// This will generate a page for all of the user inputs, creating div tags for each of the employee roles
const generatePage = (managers, engineers, interns) => {
    let addTeamProfiles = fs.readFileSync('./template/index.html', 'utf8')

    if(addTeamProfiles){

        let managerHTML = '';
        managers.forEach(manager => {
            managerHTML += `
            <div class='box'>
                <div class='manager-header'>
                    <h2>Manager</h2>
                </div>
                <div class='manager-info'>
                    <h3>Name: ${manager.name}</h3>
                    <p>ID: ${manager.id}</p>
                    <p>Email: ${manager.email}</p>
                    <p>Office Number: ${manager.officeNumber}</p>
                </div>
            </div>
            `
        });

        let engineerHTML = '';
        engineers.forEach(engineer => {
            engineerHTML += `
            <div class='box'>
                <div class='engineer-header'>
                    <h2>Engineer</h2>
                </div>
                <div class='engineer-info'>
                    <h3>Name: ${engineer.name}</h3>
                    <p>ID: ${engineer.id}</p>
                    <p>Email: ${engineer.email}</p>
                    <p>Github username: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
                </div>
            </div>
            `
        });

        let internHTML = '';
        interns.forEach(intern => {
            internHTML += `
            <div class='box'>
                <div class='intern-header'>
                    <h2>Intern</h2>
                </div>
                <div class='intern-info'>
                    <h3>Name: ${intern.name}</h3>
                    <p>ID: ${intern.id}</p>
                    <p>Email: ${intern.email}</p>
                    <p>School: ${intern.school}</p>
                </div>
            </div>
            `
        });

        // This will replace the place holders with each of the employee roles
        addTeamProfiles = addTeamProfiles.replace('<!-- MANAGERS -->', managerHTML)
        addTeamProfiles = addTeamProfiles.replace('<!-- ENGINEERS -->', engineerHTML)
        addTeamProfiles = addTeamProfiles.replace('<!-- INTERNS -->', internHTML)

        fs.writeFileSync("./dist/teamProfilePage.html", addTeamProfiles, 'utf8')

        console.log('Created profile page');
    }
}

module.exports = generatePage